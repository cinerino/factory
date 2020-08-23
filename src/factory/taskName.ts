/**
 * タスク名
 */
enum TaskName {
    /**
     * イベント予約集計
     */
    AggregateEventReservations = 'aggregateEventReservations',
    /**
     * 口座承認アクション取消
     */
    CancelAccount = 'cancelAccount',
    /**
     * クレジットカード承認アクション取消
     */
    CancelCreditCard = 'cancelCreditCard',
    /**
     * ペイメントカード決済承認アクション取消
     */
    CancelPaymentCard = 'cancelPaymentCard',
    /**
     * 予約取消
     */
    CancelReservation = 'cancelReservation',
    /**
     * 座席予約承認アクション取消
     */
    CancelSeatReservation = 'cancelSeatReservation',
    /**
     * 予約確定
     */
    ConfirmReservation = 'confirmReservation',
    /**
     * 会員削除
     */
    DeleteMember = 'deleteMember',
    /**
     * ポイントインセンティブ付与
     */
    GivePointAward = 'givePointAward',
    /**
     * 通貨転送
     */
    MoneyTransfer = 'moneyTransfer',
    /**
     * メンバーシップ注文
     */
    OrderProgramMembership = 'orderProgramMembership',
    /**
     * 決済
     */
    Pay = 'pay',
    /**
     * 口座支払
     */
    PayAccount = 'payAccount',
    /**
     * クレジットカード支払
     */
    PayCreditCard = 'payCreditCard',
    /**
     * MGチケット決済
     */
    PayMGTicket = 'payMGTicket',
    /**
     * ムビチケ支払
     */
    PayMovieTicket = 'payMovieTicket',
    /**
     * ペイメントカード決済
     */
    PayPaymentCard = 'payPaymentCard',
    /**
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    /**
     * 口座返金
     */
    RefundAccount = 'refundAccount',
    /**
     * クレジットカード返金
     */
    RefundCreditCard = 'refundCreditCard',
    /**
     * MGチケット着券取消
     */
    RefundMGTicket = 'refundMGTicket',
    /**
     * ムビチケ着券取消
     */
    RefundMovieTicket = 'refundMovieTicket',
    /**
     * ペイメントカード返金
     */
    RefundPaymentCard = 'refundPaymentCard',
    /**
     * メンバーシップ登録
     */
    RegisterProgramMembership = 'registerProgramMembership',
    /**
     * サービス登録
     */
    RegisterService = 'registerService',
    /**
     * 注文返品
     */
    ReturnOrder = 'returnOrder',
    /**
     * ポイントインセンティブ返却
     */
    ReturnPointAward = 'returnPointAward',
    /**
     *  Eメールメッセージ送信
     */
    SendEmailMessage = 'sendEmailMessage',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook',
    /**
     * メンバーシップ登録解除
     */
    UnRegisterProgramMembership = 'unRegisterProgramMembership',
    /**
     * 通貨転送中止
     */
    VoidMoneyTransfer = 'voidMoneyTransfer',
    /**
     * 決済中止
     */
    VoidPayment = 'voidPayment',
    /**
     * サービス登録中止
     */
    VoidRegisterService = 'voidRegisterService'
}

export default TaskName;
