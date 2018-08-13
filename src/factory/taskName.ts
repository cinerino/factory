/**
 * タスク名
 */
enum TaskName {
    /**
     * 座席予約承認アクション取消
     */
    CancelSeatReservation = 'cancelSeatReservation',
    /**
     * クレジットカード承認アクション取消
     */
    CancelCreditCard = 'cancelCreditCard',
    /**
     * ポイント口座承認アクション取消
     */
    CancelPoint = 'cancelPoint',
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
     * クレジットカード支払
     */
    PayCreditCard = 'payCreditCard',
    /**
     * Mocoin支払
     */
    PayMocoin = 'payMocoin',
    /**
     * ポイント支払
     */
    PayPoint = 'payPoint',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * クレジットカード返金
     */
    RefundCreditCard = 'refundCreditCard',
    /**
     * ポイント返金
     */
    RefundPoint = 'refundPoint',
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
    UnRegisterProgramMembership = 'unRegisterProgramMembership'
}

export default TaskName;
