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
import * as AuthorizeMvtkDiscountActionFactory from './factory/action/authorize/discount/mvtk';
import * as AuthorizeProgramMembershipOfferActionFactory from './factory/action/authorize/offer/programMembership';
import * as AuthorizeSeatReservationOfferActionFactory from './factory/action/authorize/offer/seatReservation';
import * as AuthorizeAccountPaymentActionFactory from './factory/action/authorize/paymentMethod/account';
import * as AuthorizeAnyPaymentActionFactory from './factory/action/authorize/paymentMethod/any';
import * as AuthorizeCreditCardPaymentActionFactory from './factory/action/authorize/paymentMethod/creditCard';
import * as AuthorizeMovieTicketPaymentActionFactory from './factory/action/authorize/paymentMethod/movieTicket';
import * as CheckMovieTicketActionFactory from './factory/action/check/paymentMethod/movieTicket';
import * as CheckTokenActionFactory from './factory/action/check/token';
import * as ConfirmReservationActionFactory from './factory/action/interact/confirm/reservation';
import * as RegisterActionFactory from './factory/action/interact/register';
import * as RegisterProgramMembershipActionFactory from './factory/action/interact/register/programMembership';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
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
import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import AccountType from './factory/accountType';
import * as AuthorizationFactory from './factory/authorization';
import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import CreativeWorkType from './factory/creativeWorkType';
import * as EncodingFormat from './factory/encodingFormat';
import * as EventFactory from './factory/event';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import * as ScreeningEventSeriesFactory from './factory/event/screeningEventSeries';
import * as InvoiceFactory from './factory/invoice';
import * as MonetaryAmountFactory from './factory/monetaryAmount';
import IMultilingualString from './factory/multilingualString';
import * as OfferFactory from './factory/offer';
import * as OrderFactory from './factory/order';
import OrderStatus from './factory/orderStatus';
import * as OrganizationFactory from './factory/organization';
import OrganizationType from './factory/organizationType';
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import * as MovieTicketFactory from './factory/paymentMethod/paymentCard/movieTicket';
import PaymentMethodType from './factory/paymentMethodType';
import PaymentStatusType from './factory/paymentStatusType';
import * as PersonFactory from './factory/person';
import PersonType from './factory/personType';
import * as PlaceFactory from './factory/place';
import * as OnlinePlaceFactory from './factory/place/online';
import * as StorePlaceFactory from './factory/place/store';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as ProgramMembershipFactory from './factory/programMembership';
import * as project from './factory/project';
import * as PropertyValueFactory from './factory/propertyValue';
import * as QuantitativeValueFactory from './factory/quantitativeValue';
import * as WebAPIServiceFactory from './factory/service/webAPI';
import { UnitCode } from './factory/unitCode';

import SortType from './factory/sortType';
import * as CancelAccountTaskFactory from './factory/task/cancelAccount';
import * as CancelCreditCardTaskFactory from './factory/task/cancelCreditCard';
import * as CancelPointAwardTaskFactory from './factory/task/cancelPointAward';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as ConfirmReservationTaskFactory from './factory/task/confirmReservation';
import * as GivePointAwardTaskFactory from './factory/task/givePointAward';
import * as ImportScreeningEventsTaskFactory from './factory/task/importScreeningEvents';
import * as MoneyTransferTaskFactory from './factory/task/moneyTransfer';
import * as PayAccountTaskFactory from './factory/task/payAccount';
import * as PayCreditCardTaskFactory from './factory/task/payCreditCard';
import * as PayMovieTicketTaskFactory from './factory/task/payMovieTicket';
import * as PlaceOrderTaskFactory from './factory/task/placeOrder';
import * as RefundAccountTaskFactory from './factory/task/refundAccount';
import * as RefundCreditCardTaskFactory from './factory/task/refundCreditCard';
import * as RefundMovieTicketTaskFactory from './factory/task/refundMovieTicket';
import * as RegisterProgramMembershipTaskFactory from './factory/task/registerProgramMembership';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as ReturnPointAwardTaskFactory from './factory/task/returnPointAward';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as SendOrderTaskFactory from './factory/task/sendOrder';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';
import * as UnRegisterProgramMembershipTaskFactory from './factory/task/unRegisterProgramMembership';
import * as UpdateEventAttendeeCapacityTaskFactory from './factory/task/updateEventAttendeeCapacity';

import * as TaskFactory from './factory/task';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as TransactionFactory from './factory/transaction';
import * as MoneyTransferTransactionFactory from './factory/transaction/moneyTransfer';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';
import TransactionStatusType from './factory/transactionStatusType';
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
export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
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
            // tslint:disable-next-line:no-shadowed-variable
            export import point = PointAwardAuthorizeActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
            export import account = AuthorizeAccountPaymentActionFactory;
            export import any = AuthorizeAnyPaymentActionFactory;
            export import creditCard = AuthorizeCreditCardPaymentActionFactory;
            export import movieTicket = AuthorizeMovieTicketPaymentActionFactory;
        }
        export namespace discount {
            export import mvtk = AuthorizeMvtkDiscountActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = AuthorizeProgramMembershipOfferActionFactory;
            // tslint:disable-next-line:no-shadowed-variable
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
    export namespace interact {
        export namespace confirm {
            export import reservation = ConfirmReservationActionFactory;
        }
        export namespace register {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = RegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = RegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = RegisterProgramMembershipActionFactory;
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
    export namespace consume {
        export namespace use {
        }
    }
}
export import accountType = AccountType;
export import authorization = AuthorizationFactory;
export import encodingFormat = EncodingFormat;
export namespace paymentMethod {
    export type ISearchConditions<T extends PaymentMethodType> =
        T extends PaymentMethodType.CreditCard ? CreditCardFactory.ISearchConditions :
        T extends PaymentMethodType.MovieTicket ? MovieTicketFactory.ISearchConditions :
        never;
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
        export import movieTicket = MovieTicketFactory;
    }
}
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
}
export import creativeWorkType = CreativeWorkType;
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
export import invoice = InvoiceFactory;
export import monetaryAmount = MonetaryAmountFactory;
export type multilingualString = IMultilingualString;
export import offer = OfferFactory;
export import order = OrderFactory;
export import orderStatus = OrderStatus;
export import organizationType = OrganizationType;
export import ownershipInfo = OwnershipInfoFactory;
export import priceCurrency = PriceCurrency;
export import paymentMethodType = PaymentMethodType;
export import paymentStatusType = PaymentStatusType;
export import person = PersonFactory;
export import personType = PersonType;
export namespace place {
    export type IPlace<T extends PlaceType> =
        T extends PlaceType.Online ? OnlinePlaceFactory.IPlace :
        T extends PlaceType.Store ? StorePlaceFactory.IPlace :
        PlaceFactory.IPlace<T>;
}
export import placeType = PlaceType;
export import programMembership = ProgramMembershipFactory;
export import project = project;
export import propertyValue = PropertyValueFactory;
export import quantitativeValue = QuantitativeValueFactory;
export namespace service {
    export import webAPI = WebAPIServiceFactory;
}
export import seller = OrganizationFactory;
export import sortType = SortType;

export namespace task {
    export type IData<T extends TaskName | string> =
        T extends TaskName.CancelAccount ? CancelAccountTaskFactory.IData :
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.IData :
        T extends TaskName.CancelPointAward ? CancelPointAwardTaskFactory.IData :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.IData :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.IData :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IData :
        T extends TaskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.IData :
        T extends TaskName.MoneyTransfer ? MoneyTransferTaskFactory.IData :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IData :
        T extends TaskName.RefundAccount ? RefundAccountTaskFactory.IData :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.IData :
        T extends TaskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.IData :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IData :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IData :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IData :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IData :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IData :
        T extends TaskName.PayAccount ? PayAccountTaskFactory.IData :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.IData :
        T extends TaskName.PayMovieTicket ? PayMovieTicketTaskFactory.IData :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IData :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IData :
        T extends TaskName.UpdateEventAttendeeCapacity ? UpdateEventAttendeeCapacityTaskFactory.IData :
        TaskFactory.IData;

    export type IAttributes<T extends TaskName | string> =
        T extends TaskName.CancelAccount ? CancelAccountTaskFactory.IAttributes :
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.IAttributes :
        T extends TaskName.CancelPointAward ? CancelPointAwardTaskFactory.IAttributes :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.IAttributes :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.IAttributes :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.IAttributes :
        T extends TaskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.IAttributes :
        T extends TaskName.MoneyTransfer ? MoneyTransferTaskFactory.IAttributes :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.IAttributes :
        T extends TaskName.RefundAccount ? RefundAccountTaskFactory.IAttributes :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.IAttributes :
        T extends TaskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.IAttributes :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.IAttributes :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IAttributes :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.IAttributes :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.IAttributes :
        T extends TaskName.PayAccount ? PayAccountTaskFactory.IAttributes :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.IAttributes :
        T extends TaskName.PayMovieTicket ? PayMovieTicketTaskFactory.IAttributes :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.IAttributes :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IAttributes :
        T extends TaskName.UpdateEventAttendeeCapacity ? UpdateEventAttendeeCapacityTaskFactory.IAttributes :
        TaskFactory.IAttributes;

    export type ITask<T extends TaskName | string> =
        T extends TaskName.CancelAccount ? CancelAccountTaskFactory.ITask :
        T extends TaskName.CancelCreditCard ? CancelCreditCardTaskFactory.ITask :
        T extends TaskName.CancelPointAward ? CancelPointAwardTaskFactory.ITask :
        T extends TaskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.ITask :
        T extends TaskName.ConfirmReservation ? ConfirmReservationTaskFactory.ITask :
        T extends TaskName.GivePointAward ? GivePointAwardTaskFactory.ITask :
        T extends TaskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.ITask :
        T extends TaskName.MoneyTransfer ? MoneyTransferTaskFactory.ITask :
        T extends TaskName.PlaceOrder ? PlaceOrderTaskFactory.ITask :
        T extends TaskName.RefundAccount ? RefundAccountTaskFactory.ITask :
        T extends TaskName.RefundCreditCard ? RefundCreditCardTaskFactory.ITask :
        T extends TaskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.ITask :
        T extends TaskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.ITask :
        T extends TaskName.ReturnOrder ? ReturnOrderTaskFactory.ITask :
        T extends TaskName.ReturnPointAward ? ReturnPointAwardTaskFactory.ITask :
        T extends TaskName.SendEmailMessage ? SendEmailMessageTaskFactory.ITask :
        T extends TaskName.SendOrder ? SendOrderTaskFactory.ITask :
        T extends TaskName.PayAccount ? PayAccountTaskFactory.ITask :
        T extends TaskName.PayCreditCard ? PayCreditCardTaskFactory.ITask :
        T extends TaskName.PayMovieTicket ? PayMovieTicketTaskFactory.ITask :
        T extends TaskName.TriggerWebhook ? TriggerWebhookTaskFactory.ITask :
        T extends TaskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.ITask :
        T extends TaskName.UpdateEventAttendeeCapacity ? UpdateEventAttendeeCapacityTaskFactory.ITask :
        TaskFactory.ITask;

    export import ISearchConditions = TaskFactory.ISearchConditions;

    export import IExecutionResult = TaskFactory.IExecutionResult;
}

export import taskName = TaskName;

export import taskStatus = TaskStatus;

export namespace transaction {
    export type ISortOrder = TransactionFactory.ISortOrder;
    export type ISearchConditions<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.ISearchConditions :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.ISearchConditions :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.ISearchConditions :
        never;
    export type IStartParams<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IStartParams<AccountType> :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IStartParams :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IStartParams :
        never;
    export type IResult<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IResult :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IResult :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IPotentialActions<AccountType> :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IPotentialActions :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IPotentialActions :
        never;
    export type IAttributes<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.IAttributes<AccountType> :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.IAttributes :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends TransactionType> =
        T extends TransactionType.MoneyTransfer ? MoneyTransferTransactionFactory.ITransaction<AccountType> :
        T extends TransactionType.PlaceOrder ? PlaceOrderTransactionFactory.ITransaction :
        T extends TransactionType.ReturnOrder ? ReturnOrderTransactionFactory.ITransaction :
        never;
    export import moneyTransfer = MoneyTransferTransactionFactory;
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import unitCode = UnitCode;
