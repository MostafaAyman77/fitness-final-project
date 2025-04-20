import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./Pages/Home/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Coach from "./Pages/Home/CoachScreen/Coach";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/signup";
import Layout from "./Components/Layout";

import BMICalculator from './Components/FitnessTools/BMI-calculator';
import CalorieCalculator from './Components/FitnessTools/Calorie-calculator';
import MacronutrientCalculator from './Components/FitnessTools/Macronutrient-calculator';
import GoalSettingTool from './Components/FitnessTools/Goal-Setting-Tool';
const routes = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "coach/:id",
      element: <Coach />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "bmi-calculator",
      element: <BMICalculator />,
    },
    {
      path: "calorie-calculator",
      element: <CalorieCalculator />,
    },
    {
      path: "macro-calculator-1",
      element: <MacronutrientCalculator />,
    },
    {
      path: "goal-setting",
      element: <GoalSettingTool />,
    },
  ]
}]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
