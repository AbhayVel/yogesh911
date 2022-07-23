import React from 'react';
import { Route, Routes as RoutesRRD } from 'react-router-dom';
import { lazyComponent } from '../../common/utils';
import { Teachers } from '../../pages/Student_KM/Teachers';
import { Department } from '../../pages/Student_Department_YG/Department';
/* not correct */


import { StudentAttendance } from '../../pages/Student_attendance_SB/Student_attendance';


const StudentLazzy = lazyComponent('Subject', import('../../pages/Subject_kk/Subject'));
/* correct way */
const Student = lazyComponent('Student', import('../../pages/Student_AV/Student'));
const Home = lazyComponent('Home', import('../../pages/Home/Home'));
const PageNotFound = lazyComponent('PageNotFound', import('../../pages/PageNotFound/PageNotFound'));

export const Routes = (): JSX.Element => (
  <RoutesRRD>
    <Route element={<Student />} path="/" />
    <Route element={<Home />} path="/home" />
    <Route element={<PageNotFound />} path="*" />
    <Route element={<Teachers/>} path="/teachers" />
    <Route element={<Department />} path="/department" />
    <Route element={<StudentLazzy />} path="/Subject" />
    <Route element={<StudentAttendance />} path="/StudentAttendance" />
  </RoutesRRD>
);

/*
 * Komal K -> Subject
 * Yogesh -> department
 * Nivant -> STudent Notes 
 * Teacher -> Komal M
 * Sanket -> STtudent Attendance 
 * Ranjit -> Teacher Notes
 */