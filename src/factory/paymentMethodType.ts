/**
 * 決済方法タイプ
 */
enum PaymentMethodType {
    /**
     * 内部口座決済
     */
    Account = 'Account',
    /**
     * クレジットカード決済
     */
    CreditCard = 'CreditCard',
    /**
     * Mocoin決済(外部仮想通貨)
     */
    Mocoin = 'Mocoin'
}
export default PaymentMethodType;
