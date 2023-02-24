# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Implementation details:
We can't change the internal Id for the Agent. So, the first ticket would give the ability to the Facility through an interface to list all the Agents that they've worked until now. The Facility User could get into each Agent and change the Agent ExternalId to a known number or code for them (the Facility).





Ticket #1
---------
Acceptance criteria:
- A new Feature to show all the Agents that have worked at least once with the Facility must available at the menu for the Facility User;

Hours: 
- 0.5 hours to add new item to the menu;
-------------------------------------------------------------


Ticket #2
---------
Acceptance criteria:
- A new column called ExternalId is created in the table "Agent X Facility";

Hours:
- 0.5 hours to create new column for an Agent x Facility relationship;
-------------------------------------------------------------


Ticket #3
---------
Acceptance criteria:
- This "Agent X Facility" List shows the ExternalId for each one of the Agents and "Not Defined" for null values;

Hours:
- 1 hours to add new column to the Listing (check view size, for smartphones, portrait, landscape, etc);
-------------------------------------------------------------


Ticket #4
---------
Acceptance criteria:
- The Facility User can see a new Field for each "Agent x Facility" called "External Id" and change it;


Hours:
- 2 hours to add new field to the "Agent x Facility" entry and disposition and check the given data (both frontend and backend);
-------------------------------------------------------------
