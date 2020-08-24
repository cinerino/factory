/**
 * タスク名
 */
enum TaskName {
    /**
     * イベント予約集計
     */
    AggregateEventReservations = 'aggregateEventReservations',
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
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    /**
     * 返金
     */
    Refund = 'refund',
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
