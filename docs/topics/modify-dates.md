# Modify Dates with dateutils

The squirrels library has a submodule called dateutils that can be used to transform date variables in Python with ease. To import the dateutils module (preferably in [context.py]), simply do:

```python
from squirrels import dateutils as du
```

The examples below demonstrates how to modify a given date by number of time periods and/or get some day of a calendar cycle using classes we call "date modifiers". The format of the date can be datetime objects, string dates, or unix timestamps (as float). Assume we have a datetime variable called `date_obj`.

## Offset by Time Period

The following "offset date modifiers" can be used to offset a datetime object by some time period.

- [OffsetYears]
- [OffsetMonths]
- [OffsetWeeks]
- [OffsetDays]

Each of their constructors take an argument **offset** for the number of time periods to offset by (can be positive or negative), and each class contains a **modify** method to modify an input date.

To add 3 weeks to `date_obj`, the code you write can look something like this:

```python
new_date = OffsetWeeks(3).modify(date_obj)
```

## Get N-th Day of Calendar Cycle

The following "day index date modifiers" can be used to get a certain day of some calendar cycle from some datetime object.

- [DayIdxOfMonthsCycle]
- [DayIdxOfYear]
- [DayIdxOfQuarter]
- [DayIdxOfMonth]
- [DayIdxOfWeek]

Each of their constuctors take an argument **idx** to specify the day number of cycle. Positive numbers like 1 and 2 represent the first and second day, while negative numbers like -1 and -2 represent the last and second last day. Using 0 is not permitted.

For [DayIdxOfMonthsCycle], the length of the cycle in months can be specified with the argument **num_months_in_cycle**. This is unlike [DayIdxOfMonth] where the length of the cycle is always one month. [DayIdxOfYear], [DayIdxOfQuarter], and [DayIdxOfMonth] are equivalent to [DayIdxOfMonthsCycle] when the **num_months_in_cycle** argument is 12, 3, or 1 respectively.

For DayIdxOfWeek, the first day of the week (using the [DayOfWeek] enum which contains values Monday, Tuesday, etc. until Sunday) can be specified using the **first_day_of_week** argument. The first month of the cycle/year/quarter can be specified (using the [Month] enum which contains values January, February, etc. until December) with the argument **first_month_of_cycle** for [DayIdxOfMonthsCycle], **first_month_of_year** for [DayIdxOfYear], and **first_month_of_quarter** for [DayIdxOfQuarter].

Each of these classes contain a modify method to modify an input date as well.

Here are some problems and solutions in code using these classes.

|Problem|Solution|
|:------|:-------|
|Get the same or prior Friday|`du.DayIdxOfWeek(idx=1, first_day_of_week=du.DayOfWeek.Friday).modify(date_obj)`|
|Get the same or next Friday|`du.DayIdxOfWeek(idx=-1, first_day_of_week=du.DayOfWeek.Saturday).modify(date_obj)`|
|If Wednesday to Friday, round up to Friday. Otherwise round down to Friday|`du.DayIdxOfWeek(idx=3, first_day_of_week=du.DayOfWeek.Wednesday).modify(date_obj)`|
|Get the third last day of month|`du.DayIdxOfMonth(idx=-3).modify(date_obj)`|
|Suppose a "Third Year" occurs every 4 months from February 1st. Get the beginning of current Third Year|`du.DayIdxOfMonthsCycle(idx=1, num_months_in_cycle=4, first_month_of_cycle=du.Month.February).modify(date_obj)`|

## Date Modification Pipeline

A class called [DateModPipeline] lets you stitch together multiple instances of the date modification classes above into a single date modification class. Simply specify a sequence of date modifiers in the constructor. Using this pipeline approach allows one to make almost any date transformation possible.

Here are some more examples of problems and solutions.

|Problem|Solution|
|:------|:-------|
|Get the next Friday|`du.DateModPipeline([du.DayIdxOfWeek(1, du.DayOfWeek.Friday), du.OffsetWeeks(1)]).modify(date_obj)`|
|Get the prior Friday|`du.DateModPipeline([du.DayIdxOfWeek(-1, du.DayOfWeek.Saturday), du.OffsetWeeks(-1)]).modify(date_obj)`|
|Get the second Friday of the current quarter. First month of quarter is January|`du.DateModPipeline([du.DayIdxOfQuarter(1), du.DayIdxOfWeek(-1, du.DayOfWeek.Saturday), du.OffsetWeeks(1)]).modify(date_obj)`|

In addition to the **modify** method, this class also lets you get a list of date objects with the method **get_date_list**. It takes an input start date and a step (as an "offset date modifier"), modifies the start date to get the end date, and returns the dates from start to end by step. Below is an example of going back every week from "June 15th, 2023" and stopping before we pass the first Friday of the Quarter that "June 15th, 2023" is in (i.e. "April 7th, 2023"). Since "June 15th, 2023" is on a Thursday, the last date in the returned date list would be "April 13th, 2023" (also a Thursday).

```python
from datetime import datetime
from squirrels import dateutils as du
...
modifier = du.DateModPipeline([du.DayIdxOfQuarter(1), du.DayIdxOfWeek(-1, du.DayOfWeek.Saturday)])
date_list = modifier.get_date_list(datetime(2023, 6, 15), du.OffsetWeeks(-1))
# date_list == [datetime(2023, 6, 15), datetime(2023, 6, 8), ..., datetime(2023, 4, 13)]
```

## Modifying Date Strings or Timestamps

More often then not, the dates that you're working with are strings or timestamps as floats. Although it should be easy enough to convert to datetime object and back, the dateutils module also provides [DateStringModifier] and [TimestampModifier] classes to simplify your code. Just like [DateModPipeline], both these classes have a constructor that takes a sequence of date modification class instances, a **modify** method, and a **get_date_list** method.

For [DateStringModifier], the constructor also takes an optional **date_format** argument for the date format of the outputs. The methods **modify** and **get_date_list** take an input date as string, and an optional **input_format** argument for the date format of the input date.

For [TimestampModifier], the input date for methods **modify** and **get_date_list** are floats representing the UNIX timestamp of the date. The output dates are also UNIX timestamps.


[context.py]: ./context
[DayOfWeek]: ../python/dateutils/DayOfWeek
[Month]: ../python/dateutils/Month
[OffsetYears]: ../python/dateutils/OffsetYears
[OffsetMonths]: ../python/dateutils/OffsetMonths
[OffsetWeeks]: ../python/dateutils/OffsetWeeks
[OffsetDays]: ../python/dateutils/OffsetDays
[DayIdxOfMonthsCycle]: ../python/dateutils/DayIdxOfMonthsCycle
[DayIdxOfYear]: ../python/dateutils/DayIdxOfYear
[DayIdxOfQuarter]: ../python/dateutils/DayIdxOfQuarter
[DayIdxOfMonth]: ../python/dateutils/DayIdxOfMonth
[DayIdxOfWeek]: ../python/dateutils/DayIdxOfWeek
[DateModPipeline]: ../python/dateutils/DateModPipeline
[DateStringModifier]: ../python/dateutils/DateStringModifier
[TimestampModifier]: ../python/dateutils/TimestampModifier
