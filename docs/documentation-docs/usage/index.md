---
sidebar_position: 3
---

# Usage Guide

This guide provides instructions for using the ITA Inventory application for both therapists and administrators.

## Accessing the System

1. Open your web browser and navigate to the [application URL](https://disc-ita-frontend.vercel.app/login).
2. Enter your email and password and click "Login" to access your dashboard.
3. You also have the option to login using Google.

## For Therapists

### Viewing Orders
The main dashboard displays all your submitted orders and their current status:

- **Pending**: Order is awaiting administrative review
- **Approved**: Order has been approved and is being processed
- **Denied**: Order was rejected (with reason)
- **Arrived**: Item has arrived
- **Ready**: Item is ready for pickup

### Submitting a New Order
1. Click the "Place New Order" button in the dashboard, above the main order table.
2. Fill out the order form with the following information:
   - Program Budget: Select the appropriate program
   - Item Name: Enter a descriptive name for the item (e.g. Markers, Guitar, etc.)
   - Link to Purchase Item: Provide a URL for the item (e.g. https://amazon.com/...)
   - Price Per Unit: Enter the individual item cost
   - Quantity: Specify how many items are needed
   - Priority Level: Select Regular or Urgent (needed for use in less than 2 weeks)
   - Reason for Buying: Provide justification for purchase (150 characters max)
3. Click "Submit" to place your order.

**Note**: You will receive an error message if the order total exceeds the available program budget or 
if you forgot to fill out a certain field of the order form.

### Canceling an Order

You can only cancel orders that are still in "Pending" status and you are the individual who made said order. To cancel
an order, do the following:
1. Locate the order in your dashboard.
2. Click the "Cancel" button for that order (right-most column of the table).
3. Confirm the cancellation in the pop-up window.

## For Administrators

### Managing Order Requests

As an administrator, you can view all submitted orders from all therapists. You can:

1. Approve or deny order requests.
2. Enter tracking numbers for approved orders after you have purchased items.
3. Update order statuses as items move through the purchasing process.

**Note**: Instead of seeing "Pending" as therapists do, administrators will see "Review" since it's the
administrator's job to review and approve/decline orders.

### Order Approve/Decline Process

1. Review pending orders in the dashboard
2. Click the status dropdown to change the status to "Approved" or "Denied"
3. If denying an order, provide a reason
4. For approved orders, you can add tracking numbers once available

### Budget Management

Administrators with "super admin" privileges can manage program budgets:

1. Navigate to the Budget Management section, near the top middle of the Dashboard page.
2. Review current budget allocations.
3. Adjust program budgets as needed.
4. View spending reports and projections.

## Troubleshooting

- **Can't log in**: Verify your credentials and ensure your account is active.
- **Order submission fails**: Check that you've filled in all required fields and that you have sufficient budget for the program 
you have selected.
- **Items not appearing**: Refresh the page or check your filtering settings.


## Development Workflow

### Start the Application (locally)
#### Start both the frontend and backend repositories. See [Installation page](../installation/index.md#running-the-application). 

### Adding content to the ITA Inventory Application
To add a new page to the website, refer to the project file structure for consistent organization and run:
``` bash
mkdir src/pages/new-page
touch src/pages/new-page/NewPage.jsx
touch src/pages/new-page/NewPageStyles.jsx
```
**Note**: All main styling is done using ```styled-components```, so that is the purpose of creating the ```NewPageStyles.jsx``` file. All styled components should go in there then exported and used in ```NewPage.jsx``` for clean code and organization.

<br></br>

To create and add a new React component to the site, run the following:
``` bash
touch src/common/components/[FOLDER_NAME]/NewComponent.jsx
```
**Note:** Please refer to the [current file structure](../project-structure/index.md#frontend-structure) to determine if a new folder needs to be created for this new component. If not, then decide which folder the component should go in and replace [FOLDER_NAME] with said folder. If the component does not seem to fit the characteristics of components in current folders, then feel free to create a new folder in the components directory and run the following commands instead of the one above:
``` bash
mkdir src/common/components/new-component
touch src/common/components/new-component/NewComponent.jsx
```

### Build for Production
To test and create an optimized production build to ensure everything is runnning and working properly without bugs, run:
``` bash
npm run build
```