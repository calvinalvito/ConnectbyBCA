const data = {
    users: [
      {
        id: 1,
        email: '[REDACTED]',
        name: 'John Doe',
        password: 'password123',
        pin: '1234',
        pin_expired_date: '2024-07-23',
        is_verified: 1,
        created_date: '2024-07-23 13:49:00',
        updated_date: '2024-07-23 13:49:00',
        deleted_date: null
      }
    ],
    user_accounts: [
      {
        id: 1,
        user_id: 1,
        account_number: '12345678901234567890123456789012',
        account_card_exp: '2025-12-31',
        available_balance: 1000000.0,
        available_balance_curr: 'IDR',
        hold_amount: 0.0,
        hold_amount_curr: 'IDR',
        created_date: '2024-07-23 13:49:00',
        updated_date: '2024-07-23 13:49:00',
        deleted_date: null
      }
    ],
    account_types: [
      {
        id: 1,
        name: 'Saving Account',
        transfer_limit: 10000000.0,
        created_date: '2024-07-23 13:49:00',
        updated_date: '2024-07-23 13:49:00',
        deleted_date: null
      }
    ],
    login_infos: [
      {
        id: 1,
        user_id: 1,
        timestamp: '2024-07-23 13:49:00',
        location: 'Jakarta, Indonesia',
        ip_address: '127.0.0.1',
        is_success: 1
      }
    ],
    transactions: [
      {
        id: 1,
        beneficiary_account_number: '98765432109876543210987654321098',
        beneficiary_email: '[REDACTED]',
        source_account_number: '12345678901234567890123456789012',
        remark: 'Transfer to Jane Doe',
        type: 'Transfer',
        amount: 500000.0,
        currency: 'IDR',
        transaction_date: '2024-07-23 13:49:00',
        created_date: '2024-07-23 13:49:00',
        updated_date: null
      }
    ]
  };
  
  module.exports = data;
  