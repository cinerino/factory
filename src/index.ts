/**
 * factory
 */
import * as pecorino from '@pecorino/factory';
import * as waiter from '@waiter/factory';

import * as chevre from './chevre';
import * as cognito from './cognito';

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as PointAwardAuthorizeActionFactory from './factory/action/authorize/award/point';
import * as AuthorizeMonetaryAmountOfferActionFactory from './factory/action/authorize/offer/monetaryAmount';
import * as AuthorizeProductOfferActionFactory from './factory/action/authorize/offer/product';
import * as AuthorizeSeatReservationOfferActionFactory from './factory/action/authorize/offer/seatReservation';
import * as AuthorizeAnyPaymentActionFactory from './factory/action/authorize/paymentMethod/any';
import * as CheckMovieTicketActionFactory from './factory/action/check/paymentMethod/movieTicket';
import * as CheckTokenActionFactory from './factory/action/check/token';
import * as ConfirmReservationActionFactory from './factory/action/interact/confirm/reservation';
import * as InformActionFactory from './factory/action/interact/inform';
import * as RegisterServiceActionFactory from './factory/action/interact/register/service';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
import * as CancelActionFactory from './factory/action/organize/cancel';
import * as OrderActionFactory from './factory/action/trade/order';
import * as PayActionFactory from './factory/action/trade/pay';
import * as RefundActionFactory from './factory/action/trade/refund';
import * as GiveActionFactory from './factory/action/transfer/give';
import * as GivePointAwardActionFactory from './factory/action/transfer/give/pointAward';
import * as MoneyTransferActionFactory from './factory/action/transfer/moneyTransfer';
import * as PrintActionFactory from './factory/action/transfer/print';
import * as PrintTicketActionFactory from './factory/action/transfer/print/ticket';
import * as ReturnOrderActionFactory from './factory/action/transfer/return/order';
import * as ReturnPointAwardActionFactory from './factory/action/transfer/return/pointAward';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';
import * as DeleteActionFactory from './factory/action/update/delete';
import * as DeleteMemberActionFactory from './factory/action/update/delete/member';

import { AccountType } from './factory/accountType';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as WebApplicationFactory from './factory/creativeWork/softwareApplication/webApplication';
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
import * as TransactionFactory from './factory/transaction';
import * as MoneyTransferTransactionFactory from './factory/transaction/moneyTransfer';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import cognito = cognito;
export import chevre = chevre;
export import pecorino = pecorino;
export import waiter = waiter;

export import errors = errors;
export import errorCode = ErrorCode;

export import accountType = AccountType;
export import actionStatusType = chevre.actionStatusType;
export import actionType = chevre.actionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAdditionalProperty = ActionFactory.IAdditionalProperty;
    export import IAttributes = ActionFactory.IAttributes;
    export import IDynamicAttributes = ActionFactory.IDynamicAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;
    export import ISortOrder = ActionFactory.ISortOrder;
    export import ISearchConditions = ActionFactory.ISearchConditions;

    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = AuthorizeActionFactory.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export namespace award {
            export import point = PointAwardAuthorizeActionFactory;
        }
        export namespace paymentMethod {
            export import any = AuthorizeAnyPaymentActionFactory;
        }
        export namespace discount {
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
            export import monetaryAmount = AuthorizeMonetaryAmountOfferActionFactory;
            export import product = AuthorizeProductOfferActionFactory;
            export import seatReservation = AuthorizeSeatReservationOfferActionFactory;
        }
    }

    export namespace check {
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
            export import movieTicket = CheckMovieTicketActionFactory;
        }
        export import token = CheckTokenActionFactory;
    }

    export namespace consume {
        export namespace use {
        }
    }

    export namespace interact {
        export namespace confirm {
            export import reservation = ConfirmReservationActionFactory;
        }
        export import inform = InformActionFactory;
        export namespace register {
            // tslint:disable-next-line:no-shadowed-variable
            // export import IAction = RegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            // export import IAttributes = RegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import service = RegisterServiceActionFactory;
        }
        export namespace unRegister {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = UnRegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = UnRegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = UnRegisterProgramMembershipActionFactory;
        }
    }

    export namespace organize {
        export import cancel = CancelActionFactory;
    }

    export namespace trade {
        // tslint:disable-next-line:no-shadowed-variable
        export import order = OrderActionFactory;
        export import pay = PayActionFactory;
        export import refund = RefundActionFactory;
    }

    export namespace transfer {
        export namespace give {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = GiveActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = GiveActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import pointAward = GivePointAwardActionFactory;
        }

        export import moneyTransfer = MoneyTransferActionFactory;

        export namespace print {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = PrintActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = PrintActionFactory.IAttributes;
            export import IRecipient = PrintActionFactory.IRecipient;
            export import ticket = PrintTicketActionFactory;
        }

        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        export namespace returnAction {
            // tslint:disable-next-line:no-shadowed-variable
            export import order = ReturnOrderActionFactory;
            export import pointAward = ReturnPointAwardActionFactory;
        }

        export namespace send {
            export namespace message {
                export import email = SendEmailMessageActionFactory;
            }
            // tslint:disable-next-line:no-shadowed-variable
            export import order = SendOrderActionFactory;
        }
    }

    export namespace update {
        export namespace deleteAction {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = DeleteActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = DeleteActionFactory.IAttributes;
            export import member = DeleteMemberActionFactory;
        }
    }
}
export import authorization = chevre.authorization;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export namespace softwareApplication {
        export import webApplication = WebApplicationFactory;
    }
}

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

export namespace transaction {
    export import IPassportBeforeStart = TransactionFactory.IPassportBeforeStart;
    export import ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;
    export import ISortOrder = TransactionFactory.ISortOrder;
    export type ISearchConditions<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.ISearchConditions :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.ISearchConditions :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.ISearchConditions :
        never;
    export type IStartParams<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IStartParams :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IStartParams :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IStartParams :
        never;
    export type IResult<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IResult :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IResult :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IPotentialActions :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IPotentialActions :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IPotentialActions :
        never;
    export type IAttributes<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IAttributes :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IAttributes :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.ITransaction :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.ITransaction :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.ITransaction :
        never;
    export import moneyTransfer = MoneyTransferTransactionFactory;
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionStatusType = chevre.transactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
