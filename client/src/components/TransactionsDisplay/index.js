import React from "react";
import "./style.css";
import CountUp from "react-countup";


const TransactionDisplay = () => {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title is-4">Total Transactions</p>
            <br/>
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
                    <span className="admin_summary_stats" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <br/>
            <p>Put line graph here</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title is-4">Total Currancy Transfered</p>
            <br/>
            <div className="content has-text-centered">
              <CountUp
                className="admin_summary_stats"
                start={0}
                end={5983.32}
                duration={2.75}
                separator=","
                prefix="$ "
                decimals={2}
                decimal="."
                delay={0}
              >
                {({ countUpRef }) => (
                  <div>
                    <span className="admin_summary_stats" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <br/>
            <p>Put line graph here</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title is-4">Total Transactions Today</p>
            <br/>
            <div className="content has-text-centered">
              <CountUp
                className="admin_summary_stats"
                start={0}
                end={150}
                duration={2.75}
                separator=","
                decimals={0}
                decimal=","
                delay={0}
              >
                {({ countUpRef }) => (
                  <div>
                    <span className="admin_summary_stats" ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <br/>
            <p>Put line graph here</p>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                <p className="title is-4">Transactions this Quarter</p>
                <p>Put line graph here</p>  
              </article>
              <article className="tile is-child box">
                <p className="title is-4">Transactions this Year</p>
                <p>Put line graph here</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title is-4">Transactions by Region</p>
                <p className="subtitle">Put piechart here</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Wide column</p>
              <p className="subtitle">Aligned with the right column</p>
              <div className="content">
                <p></p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="content">
              <p className="title">Tall column</p>
              <p className="subtitle">With even more content</p>
              <div className="content"></div>
            </div>
          </article>
        </div>
      </div>

      {/* <div className="tile is-ancestor">
      <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <p className="title">Main column</p>
            <p className="subtitle">With some content</p>
            <div className="content">
              
            </div>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Side column</p>
            <p className="subtitle">With some content</p>
            <div className="content">
              
            </div>
          </article>
        </div>
        
      </div> */}
    </>
  );
};

export default TransactionDisplay;
