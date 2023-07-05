/*

The behavior of traffic lights can be expressed as a finite state machine. A graph of such a state machine's states and transitions could look like this:

     States:      Transitions:
    _________
┌─→/         \
│ (    Red    )
│  \_________/───┐
│   _________    ├─ Prepare
│  /         \←──┘
│ ( Red+Amber )
│  \_________/───┐
│   _________    ├─ Move
│  /         \←──┘
│ (   Green   )
│  \_________/───┐
│   _________    ├─ Slow
│  /         \←──┘
│ (   Amber   )
│  \_________/───┐
│                ├─ Stop
└───────────────┘

Your task is to program a module which:

    holds and initializes the state ID string
    can be initialized with a list of transitions
    provides a method for every declared transition
    calling a transition method should carry out the transition
        ...but only if it's legal according to the associated transition rule

A single transition rule consists of three strings:

    current - The state ID this transition may begin from (e.g. Red)
    target - The state ID this transition may end at (e.g. Red+Amber)
    method - A name for the method which advances the state (e.g. Prepare)

All test cases have linear or circular graphs. You won't need to consider branching for now.

Have fun! But also keep it readable, as you might need your solution in the next kata of this series.

*/

class StateMachine {
  constructor({ init, transitions }) {
    this.state = init;  // Initialize the current state with the given initial state

    transitions.forEach(({ method, current, target }) => {
      this[method] = () => {
        if (this.state == current) {  // Check if the current state matches the expected state
          this.state = target;  // Transition to the target state if the condition is met
        }
      };
    });
  }
}
