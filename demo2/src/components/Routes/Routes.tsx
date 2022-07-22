import React from 'react';
import { Route, Routes as RoutesRRD } from 'react-router-dom';
import { lazyComponent } from '../../common/utils';
import { Subject } from '../../pages/Subject_kk/Subject';

const Student = lazyComponent('Student', import('../../pages/Student_AV/Student'));
const Home = lazyComponent('Home', import('../../pages/Home/Home'));
const PageNotFound = lazyComponent('PageNotFound', import('../../pages/PageNotFound/PageNotFound'));

export const Routes = (): JSX.Element => (
    <RoutesRRD>
        <Route element={<Student />} path="/" />
    <Route element={<Home />} path="/home" />
    <Route element={<PageNotFound />} path="*" />
    <Route element={<Subject/>} path="/Subject" />
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