/**
 * factory
 */
import * as pecorino from '@pecorino/factory';
import * as waiter from '@waiter/factory';

import * as chevre from './chevre';
import * as cognito from './cognito';

import { AccountType } from './factory/accountType';
import * as EventFactory from './factory/event';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import * as ScreeningEventSeriesFactory from './factory/event/screeningEventSeries';
import * as ProgramMembershipFactory from './factory/programMembership';

import * as AggregateEventReservationsTaskFactory from './factory/task/aggregateEventReservations';
import * as ConfirmCancelReserveTaskFactory from './factory/task/confirmCancelReserve';
import * as ConfirmMoneyTransferTaskFactory from './factory/task/confirmMoneyTransfer';
import * as ConfirmPayTaskFactory from './factory/task/confirmPay';
import * as ConfirmRefundTaskFactory from './factory/task/confirmRefund';
import * as ConfirmRegisterServiceTaskFactory from './factory/task/confirmRegisterService';
import * as ConfirmReservationTaskFactory from './factory/task/confirmReservation';
import * as DeleteMemberTaskFactory from './factory/task/deleteMember';
import * as GivePointAwardTaskFactory from './factory/task/givePointAward';
import * as OrderProgramMembershipTaskFactory from './factory/task/orderProgramMembership';
import * as PlaceOrderTaskFactory from './factory/task/placeOrder';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as ReturnPointAwardTaskFactory from './factory/task/returnPointAward';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as SendOrderTaskFactory from './factory/task/sendOrder';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';
import * as UnRegisterProgramMembershipTaskFactory from './factory/task/unRegisterProgramMembership';
import * as VoidMoneyTransferTransactionTaskFactory from './factory/task/voidMoneyTransferTransaction';
import * as VoidPayTransactionTaskFactory from './factory/task/voidPayTransaction';
import * as VoidRegisterServiceTransactionTaskFactory from './factory/task/voidRegisterServiceTransaction';
import * as VoidReserveTransactionTaskFactory from './factory/task/voidReserveTransaction';

import * as TaskFactory from './factory/task';
import TaskName from './factory/taskName';

export import cognito = cognito;
export import chevre = chevre;
export import pecorino = pecorino;
export import waiter = waiter;

export import errors = chevre.errors;
export import errorCode = chevre.errorCode;

export import accountType = AccountType;
export import actionStatusType = chevre.actionStatusType;
export import actionType = chevre.actionType;
export import action = chevre.action;
export import authorization = chevre.authorization;
export import creativeWork = chevre.creativeWork;
export namespace event {
    export type IAttributes<T extends chevre.eventType> =
        T extends chevre.eventType.ScreeningEvent ? ScreeningEventFactory.IAttributes :
        T extends chevre.eventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.IAttributes :
        EventFactory.IAttributes<T>;
    export type IEvent<T extends chevre.eventType> =
        T extends chevre.eventType.ScreeningEvent ? ScreeningEventFactory.IEvent :
        T extends chevre.eventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.IEvent :
        EventFactory.IEvent<T>;
    export type IOffer<T extends chevre.eventType> =
        T extends chevre.eventType.ScreeningEvent ? ScreeningEventFactory.IOffer :
        EventFactory.IOffer;
    export type ISearchConditions<T extends chevre.eventType> =
        T extends chevre.eventType.ScreeningEvent ? ScreeningEventFactory.ISearchConditions :
        T extends chevre.eventType.ScreeningEventSeries ? ScreeningEventSeriesFactory.ISearchConditions :
        never;
    export import screeningEvent = ScreeningEventFactory;
    export import screeningEventSeries = ScreeningEventSeriesFactory;
}
export import offer = chevre.offer;
export import order = chevre.order;
export import orderStatus = chevre.orderStatus;
export import ownershipInfo = chevre.ownershipInfo;
export import priceCurrency = chevre.priceCurrency;
export import paymentMethodType = chevre.paymentMethodType;
export import paymentStatusType = chevre.paymentStatusType;
export import person = chevre.person;
export import personType = chevre.personType;
export import programMembership = ProgramMembershipFactory;
export import project = chevre.project;
export import propertyValue = chevre.propertyValue;
export import quantitativeValue = chevre.quantitativeValue;
export import service = chevre.service;
export import seller = chevre.seller;
export import sortType = chevre.sortType;

export namespace task {
    export type IData<T extends TaskName | string> =
        T extends TaskName.AggregateEventReservations ? AggregateEventReservationsTaskFactory.IData :
        T extends TaskName.ConfirmCancelReserve ? ConfirmCancelReserveTaskFactory.IData :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.IData :
        T extends TaskName.DeleteMember ? DeleteMemberTaskFactory.IData :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IData :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.IData :
        T extends TaskName.OrderProgramMembership ? OrderProgramMembershipTaskFactory.IData :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IData :
        T extends TaskName.ConfirmRefund ? ConfirmRefundTaskFactory.IData :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.IData :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IData :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IData :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IData :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IData :
        T extends TaskName.ConfirmPay ? ConfirmPayTaskFactory.IData :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IData :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IData :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.IData :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.IData :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.IData :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.IData :
        TaskFactory.IData;

    export type IAttributes<T extends TaskName | string> =
        T extends TaskName.AggregateEventReservations ? AggregateEventReservationsTaskFactory.IAttributes :
        T extends TaskName.ConfirmCancelReserve ? ConfirmCancelReserveTaskFactory.IAttributes :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.IAttributes :
        T extends TaskName.DeleteMember ? DeleteMemberTaskFactory.IAttributes :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IAttributes :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.IAttributes :
        T extends TaskName.OrderProgramMembership ? OrderProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IAttributes :
        T extends TaskName.ConfirmRefund ? ConfirmRefundTaskFactory.IAttributes :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.IAttributes :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IAttributes :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IAttributes :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IAttributes :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IAttributes :
        T extends TaskName.ConfirmPay ? ConfirmPayTaskFactory.IAttributes :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IAttributes :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.IAttributes :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.IAttributes :
        TaskFactory.IAttributes;

    export type ITask<T extends TaskName | string> =
        T extends TaskName.AggregateEventReservations ? AggregateEventReservationsTaskFactory.ITask :
        T extends TaskName.ConfirmCancelReserve ? ConfirmCancelReserveTaskFactory.ITask :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.ITask :
        T extends TaskName.DeleteMember ? DeleteMemberTaskFactory.ITask :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.ITask :
        T extends TaskName.ConfirmMoneyTransfer ? ConfirmMoneyTransferTaskFactory.ITask :
        T extends TaskName.OrderProgramMembership ? OrderProgramMembershipTaskFactory.ITask :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.ITask :
        T extends TaskName.ConfirmRefund ? ConfirmRefundTaskFactory.ITask :
        T extends TaskName.ConfirmRegisterService ? ConfirmRegisterServiceTaskFactory.ITask :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.ITask :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.ITask :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.ITask :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.ITask :
        T extends TaskName.ConfirmPay ? ConfirmPayTaskFactory.ITask :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.ITask :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.ITask :
        T extends TaskName.VoidMoneyTransferTransaction ? VoidMoneyTransferTransactionTaskFactory.ITask :
        T extends TaskName.VoidPayTransaction ? VoidPayTransactionTaskFactory.ITask :
        T extends TaskName.VoidRegisterServiceTransaction ? VoidRegisterServiceTransactionTaskFactory.ITask :
        T extends TaskName.VoidReserveTransaction ? VoidReserveTransactionTaskFactory.ITask :
        TaskFactory.ITask;

    export import ISearchConditions = TaskFactory.ISearchConditions;

    export import IExecutionResult = TaskFactory.IExecutionResult;

    export import orderProgramMembership = OrderProgramMembershipTaskFactory;
}
export import taskName = TaskName;
export import taskStatus = chevre.taskStatus;
export import transaction = chevre.transaction;
export import transactionStatusType = chevre.transactionStatusType;
export import transactionTasksExportationStatus = chevre.transactionTasksExportationStatus;
export import transactionType = chevre.transactionType;
