import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Chatbot from '../Components/Chatbot';
import leftarrow from '../Assets/Images/left-arrow_10068022 1.png';

function CompletedEmployeeTask() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const [showFilter, setShowFilter] = useState(false);
  const handleStatusClick = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className='admin-dashboard'>
    <Header/>
    <div className='main-content-div'>
    
    <div className='main-content-div2'>
      <Sidenav /> 
    </div>
    <div className='main-content-div3'>

    

    <div className='empsaletask'>
   <Link to={'/completedtasksales'}><img src={leftarrow} className="mb-2"/></Link>
    <h3 className='text-dark mt-5'>Employee Task</h3>
    <p className='text-dark mt-3 d-grid gap-2 d-md-flex justify-content-md-end'>Employee Name:

    <MDBDropdown className="d-grid gap-2 d-md-flex justify-content-md-end">
      <MDBDropdownToggle tag='a' className='btn btn-light'>
 Amal
      </MDBDropdownToggle>
      <MDBDropdownMenu>
    <MDBDropdownItem link>Amal</MDBDropdownItem>
        <MDBDropdownItem link>Anu</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </p>
    
    
    <MDBTable className='bg-white'>
      <MDBTableHead  className='bg-primary text-white'>
        <tr>
          <th scope='col'>Company Name</th>
          <th scope='col'>Lead Name</th>
          <th scope='col'>Lead Source</th>
          <th scope='col'>Email Id</th>
          <th scope='col'>Phone No</th>
          <th scope='col'>Response</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-success'>Interested</td>
          <td   style={{ position: 'relative',cursor: 'pointer' }} >
          <MdOutlineMessage onClick={handleChatbotToggle} className='fs-3 text-primary' />
          <HiOutlineDotsVertical className='fs-4 status-icon' 
          style={{ position: 'relative',cursor: 'pointer' }} 
          alt="Status Filter"
        onClick={handleStatusClick}/>  
                  {/* Status Filter Icon */}
                  {/* Filter Dropdown */}
                  {showFilter && (
                    <div className="filter-dropdown" style={{width:'120px'}}>
                      <ul>
                        <li><input type="checkbox" /> Show All</li>
                        <li><input type="checkbox" /> Date</li>
                        
                      </ul>
                    </div>
                  )}
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-success'>Interested</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> 
          <HiOutlineDotsVertical className='fs-4' 
          />
              
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-primary'>Call back</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-danger'>Rejected</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-danger'>Rejected</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-warning'>No Response</td>
          <td><MdOutlineMessage className='fs-3 text-primary'/> <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
        <tr>
          <th scope='row'>ABCD Company</th>
          <td>ABCD Company</td>
          <td>Advertisement</td>
          <td>hr@abcd.com</td>
          <td>9087563456</td>
          <td className='text-warning'>No Response</td>
          <td><MdOutlineMessage  className='fs-3 text-primary'/>
           <HiOutlineDotsVertical className='fs-4'/>
          </td>
        </tr>
       
      </MDBTableBody>
    </MDBTable>
    </div>
    </div>
    </div>

    <Chatbot isOpen={isChatbotOpen} onClose={handleChatbotToggle} />

    </div>
  )
}

export default CompletedEmployeeTask
