import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { MoneyComponent } from './components/money/money.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LuckyCardComponent } from './components/lucky-card/lucky-card.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReferralComponent } from './components/referral/referral.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SessionEarningComponent } from './components/session-earning/session-earning.component';
import { CoinRateComponent } from './components/coin-rate/coin-rate.component';
import { TotalComponent } from './components/total/total.component';
import { HourlyLeaderboardComponent } from './components/hourly-leaderboard/hourly-leaderboard.component';
import { ReferralConditionsComponent } from './components/referral-conditions/referral-conditions.component';
import { RefferalDisplayComponent } from './components/refferal-display/refferal-display.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { WithdrawalHistoryComponent } from './components/withdrawal-history/withdrawal-history.component';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';
import { SnakeGameComponent } from './components/snake-game/snake-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    MoneyComponent,
    DashboardComponent,
    ProfileComponent,
    LuckyCardComponent,
    DepositComponent,
    WithdrawalComponent,
    TransactionHistoryComponent,
    SettingsComponent,
    ReferralComponent,
    NavbarComponent,
    SessionEarningComponent,
    CoinRateComponent,
    TotalComponent,
    HourlyLeaderboardComponent,
    ReferralConditionsComponent,
    RefferalDisplayComponent,
    NotificationsComponent,
    WithdrawalHistoryComponent,
    AccountTransactionsComponent,
    SnakeGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
