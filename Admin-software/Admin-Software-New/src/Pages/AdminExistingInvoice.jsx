import React from 'react'
import Header from '../Components/Header';
import Sidenav from '../Components/Sidenav';
import { Link } from 'react-router-dom';

function AdminExistingInvoice() {
  return (
    <div className='admin-dashboard'>
    <Header />
    <div className='main-content-div'>
    
    <div className='main-content-div2'>
      <Sidenav /> 
    </div>

    
    <div className='main-content-div3'>
    <div className="invoice-container">
      {/* Invoice Header */}
      <h1 className="invoice-title">Invoice</h1>
      <div className="invoice-header">
        
        <div className="invoice-details">
          <div className="form-group">
            <label className='me-2'>Invoice# <span className="required">*</span></label>
            <select className="input-field">
              <option>INV-007</option>
            </select>
          </div>
          <div className="form-group">
            <label className='me-2'>Terms</label>
            <select className="input-field">
              <option>Due on Receipt</option>
            </select>
          </div>
          <div className="form-group">
            <label>Invoice Date <span className="required">*</span></label>
            <input type="date" className="input-field" value="2024-02-02" />
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <input type="date" className="input-field" value="2024-02-05" />
          </div>
        </div>
      </div>

      {/* Item Details */}
      <div className="item-details-section">
        <h4>Item Details</h4>
        <div className="item-details">
          <div className="form-group">
            <label className='me-2'>Place of Supply <span className="required">*</span></label>
            <select className="input-field">
              <option>Kerala</option>
            </select>
          </div>
          <div className="form-group">
            <label>HSN Code <span className="required">*</span></label>
            <input type="text" className="input-field" value="998361" />
          </div>
          <div className="form-group">
            <label>Quantity <span className="required">*</span></label>
            <input type="text" className="input-field" value="01.00 service" />
        
          </div>
          <div className="form-group">
            <label>Rate <span className="required">*</span></label>
            <input type="text" className="input-field" value="15000/-" />
          </div>
          <div className="form-group">
            <label className='me-2'>Description <span className="required">*</span></label>
            <select className="input-field">
              <option>Select the item details</option>
            </select>
          </div>
          <div className="form-group">
            <label>Discount <span className="required">*</span></label>
            <input type="text" className="input-field" value="0%" />
          </div>
        </div>
      </div>

      {/* Tax Details */}
      <div className="tax-details-section">
        <h4>Tax</h4>
        <div className="tax-details">
          <div className="form-group">
            <label className='me-2'>GST Rate <span className="required">*</span></label>
            <select className="input-field">
              <option>18%</option>
            </select>
          </div>
          <div className="form-group">
            <label>CGST <span className="required">*</span></label>
            <input type="text" className="input-field" value="0%" />
          </div>
          <div className="form-group">
            <label>SGST <span className="required">*</span></label>
            <input type="text" className="input-field" value="0%" />
          </div>
        </div>
      </div>

      {/* Button Actions */}
      <div className="button-group">
        <button className="btn-add-more">Add More</button>
       <Link to={'/invoicebill'} ><button className="btn-view">View</button></Link>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default AdminExistingInvoice
