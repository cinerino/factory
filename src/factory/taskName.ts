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
    ConfirmCancelReserve = 'confirmCancelReserve',
    /**
     * 予約確定
     */
    ConfirmReservation = 'confirmReservation',
    /**
     * 通貨転送
     */
    ConfirmMoneyTransfer = 'confirmMoneyTransfer',
    /**
     * 決済
     */
    ConfirmPay = 'confirmPay',
    /**
     * 返金
     */
    ConfirmRefund = 'confirmRefund',
    /**
     * サービス登録
     */
    ConfirmRegisterService = 'confirmRegisterService',
    /**
     * 会員削除
     */
    DeleteMember = 'deleteMember',
    /**
     * ポイントインセンティブ付与
     */
    GivePointAward = 'givePointAward',
    /**
     * メンバーシップ注文
     */
    OrderProgramMembership = 'orderProgramMembership',
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
    VoidMoneyTransferTransaction = 'voidMoneyTransferTransaction',
    /**
     * 決済中止
     */
    VoidPayTransaction = 'voidPayTransaction',
    /**
     * サービス登録中止
     */
    VoidRegisterServiceTransaction = 'voidRegisterServiceTransaction',
    /**
     * 予約中止
     */
    VoidReserveTransaction = 'voidReserveTransaction'
}

export default TaskName;
