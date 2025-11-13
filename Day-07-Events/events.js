/* Problem Statement:
You are given an array of events where each event is represented as [startTime, endTime].
An event [s, e] means it starts at time s and ends at time e (exclusive).

Your task is to determine the minimum number of rooms required to schedule all the events so
that no two overlapping events are in the same room.

Example:
Input: [[0, 30], [5, 10], [15, 20]]
Output: 2

Explanation:
Event 1: 0–30
Event 2: 5–10 (overlaps with Event 1 → new room)
Event 3: 15–20 (overlaps with Event 1 → same room as Event 2 after it ends)
Minimum rooms needed = 2 */

function minMeetingRooms(events) {
  if (!events.length) return 0;

  const starts = events.map(e => e[0]).sort((a, b) => a - b);
  const ends = events.map(e => e[1]).sort((a, b) => a - b);

  let rooms = 0, endIdx = 0;

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endIdx]) {
      rooms++;
    } else {
      endIdx++;
    }
  }

  return rooms;
}

// Example:
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // 2
