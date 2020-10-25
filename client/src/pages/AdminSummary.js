import React from "react";
import { Link } from "react-router-dom";
import NavbarAdminDetails from "../components/Navbars/NavbarAdminDetails";
import DrawerAdmin from "../components/Drawers/DrawerAdmin";
import SidemenuAdmin from "../components/ProfileBtns/sidemenuAdmin";
import SummaryMap from '../charts/summaryMap';
import CountUp from "react-countup";
import "./design/AdminSummary.css";

const AdminSummary = () => {
  return (
    <>
      <div>
        <section className="hero is-info" id="heroHomePage">
          <div id="drawer-view">
            <DrawerAdmin />
          </div>
          <div className="hero-body"></div>
        </section>
        <div id="tablet-mobile-auth">
          <div id="nav-view">
            <NavbarAdminDetails />
            <br />
          </div>
          <br />
          <div className="outerTile">
            <div className="is-clearfix columns is-centered">
              <SidemenuAdmin />
              <article className="tile is-child notification">
                <div className="columns">
                  <div className="column is-10 new-shift" id="editSettings">
                    <br />
                    <p className="title">Data Summary</p>
                    <p className="subtitle">
                      Aggregate Summary from Shoestring
                    </p>
                    <div className="tile is-ancestor">
                      <div className="tile is-6 is-vertical is-parent">
                        <div className="tile is-child box">
                          <Link to="/transaction-history">
                            <p className="subtitle is-3">Transactions </p>
                            <br />
                            <p className="subtitle is-5">Total Transactions</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={1000}
                                duration={2.75}
                                separator=","
                                decimals={0}
                                decimal=","
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p className="subtitle is-5">Transactions this Year</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={500}
                                duration={2.75}
                                separator=","
                                decimals={0}
                                decimal=","
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p className="subtitle is-5">Transactions this Quarter</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={250}
                                duration={2.75}
                                separator=","
                                decimals={0}
                                decimal=","
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p>3 Linegraph here</p>
                          </Link>
                        </div>
                        <div className="tile is-child box">
                          <Link to="/total-funds-stored">
                            <p className="subtitle is-3">Funds Stored</p>
                            <br />
                            <p className="subtitle is-5">Total Funds Stored</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={25000}
                                duration={2.75}
                                separator=","
                                decimals={2}
                                prefix="$ "
                                decimal="."
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p className="subtitle is-5">Funds Stored this Year</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={10000}
                                duration={2.75}
                                separator=","
                                decimals={2}
                                prefix="$ "
                                decimal="."
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p className="subtitle is-5">Funds Stored this Quarter</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={3000}
                                duration={2.75}
                                separator=","
                                decimals={2}
                                prefix="$ "
                                decimal="."
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p>3 Linegraph here</p>
                          </Link>
                        </div>
                      </div>
                      <div className="tile is-parent is-vertical">
                        <div className="tile is-child box">
                          <Link to="/all-users">
                            <p className="subtitle is-3">Users</p>
                            <br />
                            <p className="subtitle is-5">Total Users</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={250}
                                duration={2.57}
                                separator=","
                                decimals={0}
                                decimal=","
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p className="subtitle is-5">New Users this Year</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={150}
                                duration={2.57}
                                separator=","
                                decimals={0}
                                decimal=","
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p className="subtitle is-5">New Users this Quarter</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={50}
                                duration={2.57}
                                separator=","
                                decimals={0}
                                decimal=","
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p>3 Linegraph here</p>
                          </Link>
                        </div>
                        <div className="tile is-child box">
                          <Link to="total-income">
                            <p className="subtitle is-3">Profits Made</p>
                            <br />
                            <p className="subtitle is-5">Total Profits made</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={5000}
                                duration={2.75}
                                separator=","
                                prefix="$ "
                                decimals={2}
                                decimal="."
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p className="subtitle is-5">Profits for this Year</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={2500}
                                duration={2.75}
                                separator=","
                                prefix="$ "
                                decimals={2}
                                decimal="."
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p className="subtitle is-5">Profits for this Quarter</p>
                            <div className="content has-text-centered">
                              <CountUp
                                className="admin_summary_stats"
                                start={0}
                                end={800}
                                duration={2.75}
                                separator=","
                                prefix="$ "
                                decimals={2}
                                decimal="."
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div>
                                    <span
                                      className="admin_summary_stats"
                                      ref={countUpRef}
                                    />
                                  </div>
                                )}
                              </CountUp>
                            </div>
                            <p>3 Linegraph here</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div id="summary_map">
                      <SummaryMap/>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSummary;
