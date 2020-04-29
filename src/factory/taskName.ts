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
     * 会員プログラム注文
     */
    OrderProgramMembership = 'orderProgramMembership',
    /**
     * 口座支払
     */
    PayAccount = 'payAccount',
    /**
     * クレジットカード支払
     */
    PayCreditCard = 'payCreditCard',
    /**
     * ムビチケ支払
     */
    PayMovieTicket = 'payMovieTicket',
    /**
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    /**
     * クレジットカード返金
     */
    RefundCreditCard = 'refundCreditCard',
    /**
     * ムビチケ着券取消
     */
    RefundMovieTicket = 'refundMovieTicket',
    /**
     * 口座返金
     */
    RefundAccount = 'refundAccount',
    /**
     * 会員プログラム登録
     */
    RegisterProgramMembership = 'registerProgramMembership',
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
     * 会員プログラム登録解除
     */
    UnRegisterProgramMembership = 'unRegisterProgramMembership',
    /**
     * 通貨転送中止
     */
    VoidMoneyTransfer = 'voidMoneyTransfer'
}

export default TaskName;
