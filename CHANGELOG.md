# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## v6.1.0 - 2020-06-11

### Changed

- update @chevre/factory

## v6.0.0 - 2020-06-02

### Added

- プロジェクトに返金通知設定を追加

### Changed

- 返金アクションのオブジェクトを決済方法に変更
- 返品取引を複数注文に対応

### Removed

- プロジェクトのリポジトリ使用設定を削除

## v5.1.0 - 2020-05-30

### Added

- 注文アイテムに決済カードを追加
- サービス登録タスクを追加

### Changed

- 決済方法インターフェースをChevreへ移行
- 金額インターフェースをChevreへ移行
- 金額オファー承認をChevre通貨転送取引連携へ変更
- update @pecorino/factory
- 注文返品取引オブジェクトを最適化
- 注文返品取引を複数注文に対応
- アクションのagentインターフェースを拡張

## v5.0.0 - 2020-05-04

### Added

- 決済方法にMGTicketを追加
- 決済方法にPrepaidCardを追加
- プリペイドカードインターフェースを追加
- プリペイドカード決済インターフェースを追加
- プリペイドカード返金インターフェースを追加
- 予約済の口座タイプを追加

### Changed

- 決済方法インターフェースを拡張

### Removed

- ムビチケディスカウント承認アクションを削除

## v4.3.0 - 2020-04-30

### Changed

- イベントオファー承認結果のpointをamountへ移行

### Removed

- プロジェクトのvalidateMovieTicket設定を削除

## v4.2.0 - 2020-04-29

### Changed

- 注文インターフェースを拡張

## v4.1.0 - 2020-04-29

### Added

- イベントオファー承認結果にamountを追加

## v4.0.0 - 2020-04-29

### Removed

- ポイントインセンティブ承認アクション取消タスクを削除
- 口座タイプをChevre管理へ移行

## v3.8.0 - 2020-04-28

### Added

- 取引確定後アクションパラメータにインセンティブ付与を追加

## v3.7.0 - 2020-04-28

### Changed

- ポイントインセンティブ承認時に口座取引を開始しないように調整

## v3.6.0 - 2020-04-28

### Changed

- ポイント付与アクションからpointAPIEndpointを削除

## v3.5.0 - 2020-04-27

### Changed

- update @chevre/factory

## v3.4.0 - 2020-04-26

### Changed

- 会員サービスのオファー属性をChevreへ移行

## v3.3.0 - 2020-04-26

### Changed

- 会員サービスの特典ポイント属性をserviceOutputの中へ移行

## v3.2.0 - 2020-04-25

### Changed

- update @chevre/factory

## v3.1.0 - 2020-04-24

### Changed

- 会員プログラムインターフェースを最適化

## v3.0.0 - 2020-04-24

### Changed

- メンバーシップインターフェースをメンバーシップとプログラムに分離

## v2.1.0 - 2020-04-21

### Removed

- イベントインポートタスクを削除
- イベントキャパシティ更新タスクを削除

## v2.0.0 - 2020-04-20

### Removed

- プロジェクトのイベントリポジトリ使用設定を削除
- プロジェクトのRedisイベント在庫状況リポジトリ使用設定を削除

## v1.8.0 - 2020-04-11

### Changed

- hasPOSをChevreへ移行

## v1.7.0 - 2020-04-08

### Changed

- update @chevre/factory

## v1.6.0 - 2020-04-05

### Added

- 販売者に返品ポリシー属性を追加

### Changed

- update @chevre/factory
- 注文検索条件拡張

### Removed

- 場所(オンラインとストア)インターフェースを削除

## v1.5.0 - 2020-01-24

### Changed

- 注文検索条件拡張

## v1.4.0 - 2020-01-24

### Changed

- 注文検索条件拡張

## v1.3.0 - 2020-01-22

### Changed

- 注文検索条件拡張

## v1.2.0 - 2020-01-21

### Changed

- 各インターフェース検索条件にproject.id.$eqを追加

## v1.1.0 - 2019-12-29

### Added

- 組織タイプにProjectを追加

## v1.0.0 - 2019-12-26

### Added

- 基本的なインターフェースを追加
