const data = {
    users: [
      {
        id: 1,
        email: 'johndoe@gmail.com',
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
        account_number: '1234567890',
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
        beneficiary_email: 'janedoe@gmail.com',
        source_account_number: '12345678901234567890123456789012',
        remark: 'Transfer to Jane Doe',
        type: 'Transfer',
        amount: 500000.0,
        currency: 'IDR',
        transaction_date: '2024-07-23 13:49:00',
        created_date: '2024-07-23 13:49:00',
        updated_date: null
      },
      {
        id: 2,
        beneficiary_account_number: '87654321098765432109876543210987',
        beneficiary_email: 'johndoe@gmail.com',
        source_account_number: '23456789012345678901234567890123',
        remark: 'Transfer to John Doe',
        type: 'Transfer',
        amount: 1000000.0,
        currency: 'IDR',
        transaction_date: '2024-07-24 14:00:00',
        created_date: '2024-07-24 14:00:00',
        updated_date: null
      },
      {
        id: 3,
        beneficiary_account_number: '76543210987654321098765432109876',
        beneficiary_email: 'alice@example.com',
        source_account_number: '34567890123456789012345678901234',
        remark: 'Payment for services',
        type: 'Payment',
        amount: 750000.0,
        currency: 'IDR',
        transaction_date: '2024-07-25 15:30:00',
        created_date: '2024-07-25 15:30:00',
        updated_date: null
      },
      {
        id: 4,
        beneficiary_account_number: '65432109876543210987654321098765',
        beneficiary_email: 'bob@example.com',
        source_account_number: '45678901234567890123456789012345',
        remark: 'Refund to Bob',
        type: 'Refund',
        amount: 300000.0,
        currency: 'IDR',
        transaction_date: '2024-07-26 10:15:00',
        created_date: '2024-07-26 10:15:00',
        updated_date: null
      },
      {
        id: 5,
        beneficiary_account_number: '54321098765432109876543210987654',
        beneficiary_email: 'carol@example.com',
        source_account_number: '56789012345678901234567890123456',
        remark: 'Transfer to Carol',
        type: 'Transfer',
        amount: 1200000.0,
        currency: 'IDR',
        transaction_date: '2024-07-27 09:45:00',
        created_date: '2024-07-27 09:45:00',
        updated_date: null
      },
      {
        id: 6,
        beneficiary_account_number: '43210987654321098765432109876543',
        beneficiary_email: 'dave@example.com',
        source_account_number: '67890123456789012345678901234567',
        remark: 'Transfer to Dave',
        type: 'Transfer',
        amount: 850000.0,
        currency: 'IDR',
        transaction_date: '2024-07-28 11:30:00',
        created_date: '2024-07-28 11:30:00',
        updated_date: null
      },
      {
        id: 7,
        beneficiary_account_number: '32109876543210987654321098765432',
        beneficiary_email: 'eve@example.com',
        source_account_number: '78901234567890123456789012345678',
        remark: 'Payment for goods',
        type: 'Payment',
        amount: 650000.0,
        currency: 'IDR',
        transaction_date: '2024-07-29 13:00:00',
        created_date: '2024-07-29 13:00:00',
        updated_date: null
      }
    ]
  };
  
  module.exports = data;
  