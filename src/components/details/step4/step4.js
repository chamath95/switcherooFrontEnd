import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import "./step4.css";

const { Option } = Select;
function StepFour(props) {


  return (
    <div className="form-outer">
      <div className="A4">
        <div className="header">
          <h5 className="header-txt"> DETAILS OF INTRODUCING INTERMEDIARY</h5>
        </div>
        <br />
        <div className="full-content">
          <div class="row" id="loginForm">
            <div className="form-group">
              <label className="box-label">Brokerage Name</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address</label>
              <textarea type="text" rows="3" className="box-textarea" />
            </div>
          </div>
        </div>
        <div className="left-pane">
          <div className="form-group">
            <label className="box-label">Telephone</label>
            <input type="text" className="box-input" />
          </div>
        </div>

        <div className="right-pane">
          <div className="form-group">
            <label className="box-label">Telephone</label>
            <input type="text" className="box-input" />
          </div>
        </div>
        <div className="full-content">
          <div className="row">
            <div className="form-group">
              <label className="box-label">Email</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Authorisation No.</label>
              <input type="text" className="box-input" />
            </div>
          </div>
          <div className="row">
            <p>Disclosure of intermediary Status (where applicable). (e.g. only acts on behalf of one lender or one insurance company)</p>
            <p>If this application has been introduced to you, by a thord party (including an appointed introducer) please provide the introducers name and address.</p>
          </div>
        </div>
        <div className="header">
          <h5 className="header-txt"> EXPLANATORY TEXT</h5>
        </div>
        <br />
        <div className="full-content">
          <div className="row">
            <p>This application form is divided into two parts. The first part captures information about you, the applicant. The second part gives important information about mortgages offered by a given mortgage lender, including statutory warnings. In part two your signature is required in relation to your application for a mortgage loan and your consent is sought in relation to various matters.</p>
            <h6 className="custom-sub-header">Please ensure that all applicants sign part one and two of the application.</h6>
          </div>
        </div>

        <div className="header">
          <h5 className="header-txt"> NFORMATION ABOUT APPLICANT</h5>
        </div>
        <br />
        <p>Please indicate the reason for your application</p>
        <div className="full-content">
          <div className="left-pane">
            <label class="container">First time buyer &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="right-pane">
            <label class="container">Re-Mortgage &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="left-pane">
            <label class="container">Purchase &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="right-pane">
            <label class="container">Residential Investment Property &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="left-pane">
            <label class="container">Let to Buy &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="right-pane">
            <label class="container">Top-up &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="left-pane">
            <label class="container">Switcher &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="right-pane">
            <label class="container">Other &nbsp;
                  <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>

          <p>If ‘Other’ please specify</p>
          <div className="form-group">
            <textarea type="text" rows="3" className="box-textarea" />
          </div>
          <br />
          <p>Failure to disclose the above information may result in the withdrawal of a lender appointment.</p>
          <label>Have you or any of your staff met the customer face-to-face?</label> &nbsp; &nbsp;
          <label class="container">Yes &nbsp;
                  <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label> &nbsp;
            <label class="container">No &nbsp;
                  <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div className="full-content">
          <div className="left-pane">
            <br />
            <div className="main-header-container">
              <div className="main-header-top"></div>
              <div className="main-header-bottom">
                <i><p className="main-header-txt"> Section A – Personal Details</p></i>
              </div>
            </div>

            <br />
            <div className="header-container">
              <h1 className="main-header">APPLICATION ONE</h1>
            </div>
            <div className="form-group">
              <label className="box-label">Forenames</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Surname</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Other/Previous Names</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Date of Birth (dd/mm/yyyy)</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Nationality</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">PPS Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Marital Status</label>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />married
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />remarried
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />single
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />separated/devorced
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />widow/er
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />co HABITANT
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />other
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">No. of Children</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Children’s Ages</label>
              <input type="text" className="box-input" />
            </div>
            <br /><br />
            <div className="header">
              <h5 className="header-txt"> CURRENT ADDRESS</h5>
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Are You</label>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />OWNER
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />TENANT
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />WITH PARENTS/RELATIVES OR FRIENDS
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Rent &euro;</label>
              <input type="text" className="box-input custom-width-input" style={{ width: 66 + 'px' }} /> pm
              </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >Time at address</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>

            <br />
            <div className="header">
              <h5 className="header-txt"> CORRESPONDENCE ADDRESS</h5>
            </div>
            <br />
            <div className="form-group">
              <label class="container left-pad-5">First time buyer &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <br />
            <div className="header">
              <h5 className="header-txt"> PREVIOUS ADDRESS</h5>(if less than 3 years at existing address)
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >Time at address</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>


            <br />
            <div className="header">
              <h5 className="header-txt"> CONTACT DETAILS</h5>
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Home Telephone Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Work Telephone Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Mobile Telephone Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">E-mail</label>
              <input type="text" className="box-input" />
            </div>
            <br />


            <div className="main-header-container">
              <div className="main-header-top"></div>
              <div className="main-header-bottom">
                <i><p className="main-header-txt"> Section B – Income & Employment</p></i>
              </div>
            </div>
            <br />

            <div className="header">
              <h5 className="header-txt"> CURRENT INCOMES</h5>
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Gross basic wage/salary pa &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="box-label">Overtime per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Bonuses per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Commissions per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Other income per annum (non rental) &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Lodger income per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Residential Investment income per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Total gross income per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Total joint financial income pa &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Total NET income per mont &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Nature of Income </label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Employment Status </label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />EMPLOYED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />EMPLOYED & SELF EMPLOYED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />HOMEMAKER
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />OTHER
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />RETIRED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />SELF EMPLOYED
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <br /><br />
            <div className="header">
              <h5 className="header-txt"> PREVIOUS EMPLOYMENT</h5> (if less than 1 years at current employer)
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Employer’s Name</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >County</label>
              <input type="text" className="box-input" style={{ width: "70px" }} />
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Occupation</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >Length of Service with employer</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>

            <br />
            <div className="header">
              <h5 className="header-txt"> SELF EMPLOYED DETAILS</h5>
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Name of firm/company</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" style={{ width: "70px" }} />
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Nature of Business</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">How long has the business been established</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Time Involved</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Average profit over three years &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Percentage shareholding/partnership interest</label>
              <input type="text" className="box-input" /> %
            </div>
            <div className="form-group">
              <label className="box-label">Name of accountant</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Name of accounting firm</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" style={{ width: "70px" }} />
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Telephone number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Fax Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">3 years audited accounts available</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >Length of Service with employer</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>
            <div className="form-group">
              <label className="box-label">Tax affairs up to date </label>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />yes
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />no
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>

            <br />
            <div className="main-header-container">
              <div className="main-header-top"></div>
              <div className="main-header-bottom">
                <i><p className="main-header-txt"> Section C – Financial & Credit History</p></i>
              </div>
            </div>


            <br />
            <div className="form-group">
              <label className="box-label">Current Bank/Building Society</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >County</label>
              <input type="text" className="box-input" style={{ width: "70px" }} />
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Account Type</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Account Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Sort Code</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >I have held this account for</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>






          </div>


















          <div className="right-pane">
            <br />
            <div className="header-space"></div>
            <div>
              <div className="header-container">
                <h1 className="main-header">APPLICATION TWO</h1>
              </div>
              <div className="form-group">
                <label class="container left-pad-5">Guarantor &nbsp;
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label className="box-label">Forenames</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Surname</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Other/Previous Names</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Date of Birth (dd/mm/yyyy)</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Nationality</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">PPS Number</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Marital Status</label>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />married
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />remarried
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />single
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />separated/devorced
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />widow/er
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />co HABITANT
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />other
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="box-label">No. of Children</label>
                <input type="text" className="box-input" />
              </div>
              <div className="form-group">
                <label className="box-label">Children’s Ages</label>
                <input type="text" className="box-input" />
              </div>
            </div>
            <br />
            <div className="header">
              <h5 className="header-txt"> CURRENT ADDRESS</h5>
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Are You</label>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />OWNER
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />TENANT
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />WITH PARENTS/RELATIVES OR FRIENDS
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Rent &euro;</label>
              <input type="text" className="box-input custom-width-input" style={{ width: 66 + 'px' }} /> pm
              </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >Time at address</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>

            <br />
            <div className="header">
              <h5 className="header-txt"> CORRESPONDENCE ADDRESS</h5>
            </div>
            <br />
            <div className="form-group">
              <label class="container left-pad-5">First time buyer &nbsp;
                  <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>

            <br />
            <div className="header">
              <h5 className="header-txt"> PREVIOUS ADDRESS</h5>(if less than 3 years at existing address)
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >Time at address</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>

            <br />
            <div className="header">
              <h5 className="header-txt"> CONTACT DETAILS</h5>
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Home Telephone Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Work Telephone Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Mobile Telephone Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">E-mail</label>
              <input type="text" className="box-input" />
            </div>

            <br />

            <div className="header-space"></div>
            <div className="header">
              <h5 className="header-txt"> CURRENT INCOMES</h5>
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Gross basic wage/salary pa &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="box-label">Overtime per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Bonuses per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Commissions per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Other income per annum (non rental) &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />GUARANTEED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />REGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />IRREGULAR
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Lodger income per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Residential Investment income per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Total gross income per annum &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Total joint financial income pa &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Total NET income per mont &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Nature of Income </label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Employment Status </label>
              <input type="text" className="box-input" />
            </div>
            <div className="float-right">
              <div className="form-group">
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />EMPLOYED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />EMPLOYED & SELF EMPLOYED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />HOMEMAKER
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />OTHER
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />RETIRED
                  <span class="checkmark"></span>
                  </label>
                </div>
                <div className="radio-area">
                  <label class="container">
                    <input type="radio" name="radio" /><br />SELF EMPLOYED
                  <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>



            <br /><br />
            <div className="header">
              <h5 className="header-txt"> PREVIOUS EMPLOYMENT</h5> (if less than 1 years at current employer)
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Employer’s Name</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" style={{ width: "70px" }} />
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Occupation</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >Length of Service with employer</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>

            <br />
            <div className="header">
              <h5 className="header-txt"> SELF EMPLOYED DETAILS</h5>
            </div>
            <br />
            <div className="form-group">
              <label className="box-label">Name of firm/company</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" style={{ width: "70px" }} />
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Nature of Business</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">How long has the business been established</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Time Involved</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Average profit over three years &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Percentage shareholding/partnership interest</label>
              <input type="text" className="box-input" /> %
            </div>
            <div className="form-group">
              <label className="box-label">Name of accountant</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Name of accounting firm</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">County</label>
              <input type="text" className="box-input" style={{ width: "70px" }} />
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Telephone number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Fax Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">3 years audited accounts available</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >Length of Service with employer</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>
            <div className="form-group">
              <label className="box-label">Tax affairs up to date </label>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />yes
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />no
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>



            <br />
            <div className="header-space"></div>
            <div className="form-group">
              <label className="box-label">Current Bank/Building Society</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 1</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 2</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address Line 3</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >County</label>
              <input type="text" className="box-input" style={{ width: "70px" }} />
              <label className="box-label">Country</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Account Type</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Account Number</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Sort Code</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label" >I have held this account for</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Years</label>
              <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
              <label className="box-label">Month</label>
            </div>

          </div>






        </div>


        <div className="custom-space"></div>
        <div className="header">
          <h5 className="header-txt"> DETAILS OF INTRODUCING INTERMEDIARY</h5>
        </div>
        <br />
        <div className="full-content">
          <table style={{ width: "100%" }}>
            <tr>
              <th>Financial Institution</th>
              <th>A/C Number</th>
              <th>Monthly Savings</th>
              <th>App1</th>
              <th>App2</th>
              <th>Balance</th>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="radio-area-2">
                  <label class="container">
                    <input type="radio" name="radio" /><br />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label className="box-label">&euro;</label>
                  <input type="text" className="box-input" />
                </div>
              </td>
            </tr>

          </table>
        </div>
        <br />
        <div className="wrapper">
          <div className="left-content">
            <div className="header">
              <h5 className="header-txt">  MORTGAGE 1</h5>
            </div>
            <div className="form-group">
              <label className="box-label">Inception Date</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Mortgage Term</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Est. Sale Price &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Are you selling this property </label>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />yes
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />no
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Name of Lender</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Mortgage Acct. No.</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address of Lender</label>
              <textarea type="text" rows="3" className="box-textarea" />
            </div>
            <div className="form-group">
              <label className="box-label">Property Value &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Balance Due &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Year Purchased</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">If fixed, for how many years</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments missed in last 6 months</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments missed in last 12 months</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments per month</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Rental Income per month &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address of Property</label>
              <textarea type="text" rows="3" className="box-textarea" />
            </div>
            <div className="form-group">
              <label className="box-label">Type of Mortgage </label>
              <br />
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />ANNUITY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />ENDOWMENT
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />INTEREST ONLY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />OTHER
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />PENSION
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Type of Ratee </label>
              <br />
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />FIXED
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />PENSION
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />INTEREST ONLY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />other
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>

          </div>
          <div className="middle-content">
            <div className="header">
              <h5 className="header-txt">  MORTGAGE 1</h5>
            </div>
            <div className="form-group">
              <label className="box-label">Inception Date</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Mortgage Term</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Est. Sale Price &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Are you selling this property </label>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />yes
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />no
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Name of Lender</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Mortgage Acct. No.</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address of Lender</label>
              <textarea type="text" rows="3" className="box-textarea" />
            </div>
            <div className="form-group">
              <label className="box-label">Property Value &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Balance Due &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Year Purchased</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">If fixed, for how many years</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments missed in last 6 months</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments missed in last 12 months</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments per month</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Rental Income per month &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address of Property</label>
              <textarea type="text" rows="3" className="box-textarea" />
            </div>
            <div className="form-group">
              <label className="box-label">Type of Mortgage </label>
              <br />
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />ANNUITY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />ENDOWMENT
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />INTEREST ONLY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />OTHER
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />PENSION
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Type of Ratee </label>
              <br />
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />FIXED
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />PENSION
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />INTEREST ONLY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />other
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="header">
              <h5 className="header-txt">  MORTGAGE 1</h5>
            </div>
            <div className="form-group">
              <label className="box-label">Inception Date</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Mortgage Term</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Est. Sale Price &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Are you selling this property </label>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />yes
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />no
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Name of Lender</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Mortgage Acct. No.</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address of Lender</label>
              <textarea type="text" rows="3" className="box-textarea" />
            </div>
            <div className="form-group">
              <label className="box-label">Property Value &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Balance Due &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Year Purchased</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">If fixed, for how many years</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments missed in last 6 months</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments missed in last 12 months</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Payments per month</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Rental Income per month &euro;</label>
              <input type="text" className="box-input" />
            </div>
            <div className="form-group">
              <label className="box-label">Address of Property</label>
              <textarea type="text" rows="3" className="box-textarea" />
            </div>
            <div className="form-group">
              <label className="box-label">Type of Mortgage </label>
              <br />
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />ANNUITY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />ENDOWMENT
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />INTEREST ONLY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />OTHER
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />PENSION
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="box-label">Type of Ratee </label>
              <br />
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />DISCOUNT VARIABLE
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />FIXED
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />PENSION
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />INTEREST ONLY
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="radio-area">
                <label class="container">
                  <input type="radio" name="radio" /><br />other
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <br />
        <p>Is property registered in any name other than that of the applicant</p>

        <div className="form-group">
          <label className="box-label">Details</label>
          <textarea type="text" rows="3" className="box-textarea" />
        </div>

<br/>
        <div className="header">
          <h5 className="header-txt"> FINANCIAL COMMITMENTS</h5>
        </div>
        <br />

        <div className="form-group">
          <label className="box-label">How many existing loans do you have</label>
          <input type="text" className="box-input" style={{ width: 66 + 'px' }} />
        </div>
        <div className="form-group">
          <label className="box-label">Amount Borrowed</label>
        </div>

        <div className="wrapper2">
          <div className="left-content2">
            <div className="form-group">
              <label className="box-label">Applicant 1 &euro;</label>
              <input type="text" className="box-input" />
            </div>
          </div>
          <div className="right-content2">
            <div className="form-group">
              <label className="box-label">Applicant 1 &euro;</label>
              <input type="text" className="box-input" />
            </div>
          </div>
        </div>

        <br /><br />

        <h1>
          Title
  </h1>
        <p> 1Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>2 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>3 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <h1>
          Hey you!
  </h1>
        <p>4 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean f ermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>5 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p> 6 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>7 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>8 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>9 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <h1>
          Lorum lorum lorum
  </h1>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
    facilisis luctus, metus</p>



        <div className="wrapper">
          <div className="left">e habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
            Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec n</div>
          <div className="right">e habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
            Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
          lacus enim ac dui. Donec n</div>
        </div>


      </div>




    </div>
  );
}
export default StepFour;
