/**
 * タスク名
 */
enum TaskName {
    /**
     * 上映イベント在庫仕入れ
     */
    ImportScreeningEvents = 'importScreeningEvents',
    /**
     * 座席予約承認アクション取消
     */
    CancelSeatReservation = 'cancelSeatReservation',
    /**
     * クレジットカード承認アクション取消
     */
    CancelCreditCard = 'cancelCreditCard',
    /**
     * 口座承認アクション取消
     */
    CancelAccount = 'cancelAccount',
    /**
     * ポイントインセンティブ承認アクション取消
     */
    CancelPointAward = 'cancelPointAward',
    /**
     *  Eメールメッセージ送信
     */
    SendEmailMessage = 'sendEmailMessage',
    /**
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    /**
     * 注文返品
     */
    ReturnOrder = 'returnOrder',
    /**
     * ポイントインセンティブ返却
     */
    ReturnPointAward = 'returnPointAward',
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
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * クレジットカード返金
     */
    RefundCreditCard = 'refundCreditCard',
    /**
     * 口座返金
     */
    RefundAccount = 'refundAccount',
    /**
     * ポイントインセンティブ付与
     */
    GivePointAward = 'givePointAward',
    /**
     * 会員プログラム登録
     */
    RegisterProgramMembership = 'registerProgramMembership',
    /**
     * 会員プログラム登録解除
     */
    UnRegisterProgramMembership = 'unRegisterProgramMembership',
    /**
     * ウェブフックをたたく
     */
    TriggerWebhook = 'triggerWebhook'
}

export default TaskName;
