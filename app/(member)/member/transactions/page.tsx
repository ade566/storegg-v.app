import MemberTopTitle from "@/components/atoms/Member/TopTitle";
import MemberSidebar from "@/components/molecules/Member/Sidebar";
import MemberTransactionButtonTab from "@/components/organisms/Member/Transaction/ButtonTab";
import MemberTransactionRow from "@/components/organisms/Member/Transaction/Row";

export default function memberTransactions() {
  return (
    <section className="transactions overflow-auto">
      <MemberSidebar activeMenu='transactions' />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <MemberTopTitle title="My Transactions" />
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <MemberTransactionButtonTab 
                  title="All Trx" filter="*" active />
                <MemberTransactionButtonTab title="Success" filter="success" />
                <MemberTransactionButtonTab title="Pending" filter="pending" />
                <MemberTransactionButtonTab title="Failed" filter="failed" />
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">Game</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  <MemberTransactionRow 
                    image="/img/overview-1.png" 
                    title="Mobile Legends: The New Battle 2021" 
                    category="Desktop" 
                    item="200 Gold" 
                    price={290000} 
                    status="Pending" />

                  <MemberTransactionRow 
                    image="/img/overview-2.png" 
                    title="Call of Duty: Modern" 
                    category="Desktop" 
                    item="550 Gold" 
                    price={740000} 
                    status="Success" />

                  <MemberTransactionRow 
                    image="/img/overview-3.png" 
                    title="Clash of Clans" 
                    category="Mobile" 
                    item="100 Gem" 
                    price={120000} 
                    status="Failed" />

                  <MemberTransactionRow 
                    image="/img/overview-4.png" 
                    title="The Royal Game" 
                    category="Mobile" 
                    item="225 Gold" 
                    price={200000} 
                    status="Pending" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}