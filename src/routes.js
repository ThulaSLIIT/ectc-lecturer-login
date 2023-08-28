/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";

import ChangePassword from "views/examples/ChangePassword.js";


import AddStudentAttendance from "views/examples/AddStudentAttendance.js";
import AddstudentGrades from "views/examples/AddstudentGrades.js";

import LectureCoverages from "views/examples/LectureCoverages.js";

import Icons from "views/examples/Icons.js";

import AddLectureCoverage from "views/examples/AddLectureCoverage.js";



var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fa fa-dashboard" ,
    component: <Index />,
    layout: "/admin",
  },

  {
    path: "/AddLectureCoverage",
    name: "Add Lecture Coverage",
    icon: "fa fa-plus",
    component: <AddLectureCoverage />,
    layout: "/admin",
  },
  {
    path: "/LectureCoverages",
    name: "Lecture Coverages",
    icon: "fa fa-eye",
    component: <LectureCoverages />,
    layout: "/admin",
  },

  {
    path: "/icons",
    name: "Payments History",
    icon: "fa fa-eye",
    component: <Icons />,
    layout: "/admin",
  },
 



  {
    path: "/ChangePassword",
    name: "Change Password",
    icon: "fa fa-key",
    component: <ChangePassword/>,
    layout: "/admin",
  },

  {
    path: "/AddStudentAttendance",
    name: "Student Attendance",
    icon: "fa fa-pencil-square",
    component: <AddStudentAttendance />,
    layout: "/admin",
  },
  {
    path: "/AddstudentGrades",
    name: "Add student Grades",
    icon: "fa fa-graduation-cap",
    component: <AddstudentGrades />,
    layout: "/admin",
  },



  {
    path: "/user-profile",
    name: "View User Login",
    icon: "ni ni-single-02 text-black",
    component: <Profile />,
    layout: "/admin",
  },
  
];
export default routes;
