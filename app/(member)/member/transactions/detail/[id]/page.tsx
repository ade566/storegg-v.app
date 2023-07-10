import { Metadata } from 'next'
import MemberTopTitle from "@/components/atoms/Member/TopTitle";
import MemberSidebar from "@/components/molecules/Member/Sidebar";
import TransactionLabelValue from '@/components/organisms/Member/Transaction/Detail/LabelValue';
import MemberTransactionDetailHeader from '@/components/organisms/Member/Transaction/Detail/Header';

export const metadata: Metadata = {
  title: `Transaction Detail`,
}

export default function memberTransactionDetail({ params }: { params: { id: string } }) {
  return (
    <section className="transactions-detail overflow-auto">
      <MemberSidebar activeMenu='transactions' />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <MemberTopTitle title={`Details #${params.id}`} />
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <MemberTransactionDetailHeader />
                <hr />
                <div className="purchase pt-30">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                  <TransactionLabelValue 
                    label="Your Game ID" value="masayoshizero" />
                  <TransactionLabelValue 
                    label="Order ID" value="#GG001" />
                  <TransactionLabelValue 
                    label="Item" value="250 Diamonds" />
                  <TransactionLabelValue 
                    label="Price" value="Rp 42.280.500" />
                  <TransactionLabelValue 
                    label="Tax (10%)" value="Rp 4.228.000" />
                  <TransactionLabelValue 
                    label="Total" value="Rp 55.000.600" />
                </div>
                <div className="payment pt-10 pb-10">
                  <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                  <TransactionLabelValue 
                    label="Your Account Name" value="Masayoshi Angga Zero" />
                  <TransactionLabelValue 
                    label="Type" value="Worldwide Transfer" />
                  <TransactionLabelValue 
                    label="Bank Name" value="Mandiri" />
                  <TransactionLabelValue 
                    label="Bank Account Name" value="PT Store GG Indonesia" />
                  <TransactionLabelValue 
                    label="Bank Number" value="1800-9090-2021" />
                  <TransactionLabelValue 
                    label="Your" value="masayoshizero" />
                  <TransactionLabelValue 
                    label="Your" value="masayoshizero" />
                </div>
                <div className="d-md-block d-flex flex-column w-100">
                  <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" href="#"
                    role="button">WhatsApp ke Admin</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}