'use strict';
import 'account-list.scss';
import Account from 'Account/Account';

export default class AccountList extends React.Component {
	render() {
		let { accounts, additionalClassName } = this.props;
		accounts = accounts.map(( account, index ) => {
			return (
				<Account key={index}
				         name={account.name}
				         additionalClassName="account-list__item"/>
			)
		});

		return (
			<div className={"account-list " + additionalClassName}>
			     {accounts}
			</div>
		);
	}
}