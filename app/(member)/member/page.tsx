import { Metadata } from 'next'
import CategoriesSpent from "@/components/organisms/Member/Overview/CategoriesSpent";
import TransactionRows from "@/components/organisms/Member/Overview/TransactionRows";
import MemberSidebar from "@/components/molecules/Member/Sidebar";

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function memberDashboard() {
  return (
    <section className="overview overflow-auto">
      <MemberSidebar activeMenu="dashboard" />

      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
            <div className="main-content">
              <div className="row">
                <CategoriesSpent 
                  image="/img/categories/1.svg" 
                  amount={1800000}>
                  Game<br />Dekstop
                </CategoriesSpent>
                <CategoriesSpent 
                  image="/img/categories/2.svg" 
                  amount={800000}>
                  Game<br />Mobile
                </CategoriesSpent>
                <CategoriesSpent 
                  image="/img/categories/3.svg" 
                  amount={100000}>
                  Other<br />Categories
                </CategoriesSpent>
              </div>
            </div>
          </div>

          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">Game</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TransactionRows 
                    image="/img/overview-1.png"
                    title="Mobile Legends: The New Battle 2021" 
                    category="Desktop"
                    item="200 Gold"
                    price={290000}
                    status="Pending"
                    />
                  <TransactionRows 
                    image="/img/overview-2.png"
                    title="Call of Duty:Modern" 
                    category="Desktop"
                    item="550 Gold"
                    price={740000}
                    status="Success"
                    />
                  <TransactionRows 
                    image="/img/overview-3.png"
                    title="Clash of Clans" 
                    category="Mobile"
                    item="100 Gold"
                    price={120000}
                    status="Failed"
                    />
                  <TransactionRows 
                    image="/img/overview-4.png"
                    title="The Royal Game" 
                    category="Mobile"
                    item="225 Gold"
                    price={200000}
                    status="Pending"
                    />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
