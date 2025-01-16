import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Plus, Wallet, TrendingUp, DollarSign } from 'lucide-react';

interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function Dashboard() {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [salary, setSalary] = useState('');
  const [newExpense, setNewExpense] = useState({
    amount: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    fetchExpenses();
    fetchSalary();
  }, [user]);

  // Fetch Expenses
  const fetchExpenses = async () => {
    if (!user) return;

    try {
      // Fetch expenses
      const { data: expensesData, error: expensesError } = await supabase
        .from('expenses')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false });

      if (expensesError) {
        console.error('Error fetching expenses:', expensesError.message);
        return;
      }

      setExpenses(expensesData || []);
      const total = (expensesData || []).reduce(
        (sum, expense) => sum + expense.amount,
        0
      );
      setTotalExpenses(total);

      // Fetch user salary
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('salary')
        .eq('id', user.id)
        .single();

      if (userError) {
        console.error('Error fetching user data:', userError.message);
        return;
      }

      setSalary(userData?.salary || 0);
    } catch (error) {
      console.error('Unexpected error fetching data:', error);
    }
  };
  // Handle the change in the input field

  const handleSalaryChange = (e) => {
    // Only allow numeric input, and update the salary state
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Ensure the value is a number
      setSalary(value);
    }
  };
  // Fetch Salary
  const fetchSalary = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('users')
      .select('salary')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Error fetching salary:', error);
      return;
    }

    setSalary(data?.salary || 0);
  };

  // Add Expense
  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const { error } = await supabase.from('expenses').insert([
      {
        user_id: user.id,
        amount: parseFloat(newExpense.amount),
        category: newExpense.category,
        description: newExpense.description,
        date: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Error adding expense:', error);
      return;
    }

    setNewExpense({ amount: '', category: '', description: '' });
    fetchExpenses();
  };

  // Calculate category totals for pie chart
  const pieData = expenses.reduce((acc: { [key: string]: number }, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const chartData = Object.entries(pieData).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.email}
          </h1>
          <p className="text-gray-600">Here's an overview of your finances</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Total Balance</p>
                <h2 className="text-2xl font-bold">
                  ${salary - totalExpenses}
                </h2>
              </div>
              <Wallet className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Monthly Expenses</p>
                <h2 className="text-2xl font-bold">${totalExpenses}</h2>
              </div>
              <TrendingUp className="h-8 w-8 text-red-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Monthly Income</p>
                <h2 className="text-2xl font-bold">
                  ${salary || '0'} {/* Display the salary or default to "0" */}
                </h2>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-600">Set Your Salary</label>
              <input
                type="text"
                value={salary}
                onChange={handleSalaryChange}
                className="mt-2 p-2 border rounded-md"
                placeholder="Enter your salary"
              />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Expense Trends</h3>
            <LineChart width={500} height={300} data={expenses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            </LineChart>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
            <PieChart width={500} height={300}>
              <Pie
                data={chartData}
                cx={250}
                cy={150}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Add Expense Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Add New Expense</h3>
          <form
            onSubmit={handleAddExpense}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <input
              type="number"
              placeholder="Amount"
              value={newExpense.amount}
              onChange={(e) =>
                setNewExpense({ ...newExpense, amount: e.target.value })
              }
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={newExpense.category}
              onChange={(e) =>
                setNewExpense({ ...newExpense, category: e.target.value })
              }
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={newExpense.description}
              onChange={(e) =>
                setNewExpense({ ...newExpense, description: e.target.value })
              }
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
              required
            />
            <button
              type="submit"
              className="md:col-span-3 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Expense
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
