import React from "react";
import './home.scss'
import {Sidebar} from "../../components/sidebar/Sidebar";
import {Navbar} from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import TableList from "../../components/table/Table";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
                <div className="charts">

                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Patients</div>
                    <TableList/>
                </div>
            </div>
        </div>
    )
}


export default Home