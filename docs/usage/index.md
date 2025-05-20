---
sidebar_position: 3
---

# Usage Guide

This guide provides instructions for using the DISC application for both therapists and administrators.

## Accessing the System

1. Open your web browser and navigate to the application URL (locally: http://localhost:3000)
2. Enter your email and password
3. Click "Login" to access your dashboard

## For Therapists

### Viewing Orders

The main dashboard displays all your submitted orders and their current status:

- **Pending**: Order is awaiting administrative review
- **Approved**: Order has been approved and is being processed
- **Denied**: Order was rejected (with reason)
- **Arrived**: Item has arrived and is ready for pickup
- **Ready**: Item is ready for pickup

### Submitting a New Order

1. Click the "Place New Order" button in the dashboard
2. Fill out the order form with the following information:
   - Program Budget: Select the appropriate program 
   - Item Name: Enter a descriptive name for the item
   - Link to Purchase Item: Provide a URL for the item
   - Price Per Unit: Enter the individual item cost
   - Quantity: Specify how many items are needed
   - Priority Level: Select Regular or Urgent
   - Reason for Buying: Provide justification (150 characters max)
3. Click "Submit" to place your order

**Note**: You will receive an error message if the order total exceeds the available program budget.

### Canceling an Order

You can only cancel orders that are still in "Pending" status:

1. Locate the order in your dashboard
2. Click the "Cancel" button for that order
3. Confirm the cancellation in the dialog box

## For Administrators

### Managing Order Requests

As an administrator, you can view all submitted orders from all therapists. You can:

1. Approve or deny order requests
2. Enter tracking numbers for approved orders
3. Update order status as items move through the purchasing process

### Order Approval Process

1. Review pending orders in the dashboard
2. Click the status dropdown to change the status to "Approved" or "Denied"
3. If denying an order, provide a reason
4. For approved orders, you can add tracking numbers once available

### Budget Management

Administrators with super_admin privileges can manage program budgets:

1. Navigate to the Budget Management section
2. Review current budget allocations
3. Adjust program budgets as needed
4. View spending reports and projections

## Keyboard Shortcuts

| Action | Shortcut |
| ------ | -------- |
| Create new order | Ctrl+N (Windows) / Cmd+N (Mac) |
| Refresh dashboard | F5 |
| Log out | Ctrl+L (Windows) / Cmd+L (Mac) |

## Troubleshooting

- **Can't log in**: Verify your credentials and ensure your account is active
- **Order submission fails**: Check that you've filled in all required fields and that you have sufficient budget
- **Items not appearing**: Refresh the page or check your filtering settings 