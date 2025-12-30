// AI Test Bank
// Course data file for Quiz Hub

window.AI_TEST_BANK_DATA = [
            // ============================================================
            // MULTIPLE CHOICE QUESTIONS
            // ============================================================

            // --- Page 1 ---
            {
                question: "A simple reflex agent makes decisions based on:",
                options: ["Past experiences and learning", "The current percept only", "A model of the environment", "Future goal states"],
                answer: "The current percept only",
                explanation: "Simple reflex agents act only on the basis of the current percept, ignoring the rest of the percept history.",
                page: 1,
                lecture: "Lecture 2: Intelligent Agents"
            },
            {
                question: "Greedy Best-First Search selects nodes based on:",
                options: ["Path cost g(n)", "Heuristic value h(n)", "g(n)+h(n)", "Node depth"],
                answer: "Heuristic value h(n)",
                explanation: "Greedy Best-First search expands the node that is closest to the goal (lowest h(n)).",
                page: 1,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "In A* search, what does f(n) represent?",
                options: ["Exact remaining cost from n to goal", "Estimated total cost of a solution path", "Number of nodes expanded so far", "Depth of node n"],
                answer: "Estimated total cost of a solution path",
                explanation: "f(n) = g(n) + h(n), representing the estimated cost of the cheapest solution through node n.",
                page: 1,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "The PEAS description of an AI agent includes:",
                options: ["Performance, Environment, Actions, Sensors", "Prediction, Efficiency, Accuracy, Speed", "Perceiving, Environment, Actuators, Sensors", "Performance, Environment, Actuators, Sensors"],
                answer: "Performance, Environment, Actuators, Sensors",
                explanation: "PEAS stands for Performance, Environment, Actuators, and Sensors.",
                page: 1,
                lecture: "Lecture 2: Intelligent Agents"
            },
            {
                question: "Which property must a heuristic h(n) satisfy to be admissible for A* search?",
                options: ["h(n) never overestimates the true cost to a goal", "h(n) is always zero", "h(n) is always greater than the true cost", "h(n) equals the path cost so far g(n)"],
                answer: "h(n) never overestimates the true cost to a goal",
                explanation: "An admissible heuristic never overestimates the cost to reach the goal.",
                page: 1,
                lecture: "Lecture 6: Informed Search"
            },

            // --- Page 2 ---
            {
                question: "What does problem formulation involve?",
                options: ["Writing the algorithm", "Describing states, actions, goals, and costs", "Choosing the search strategy", "Evaluating heuristics"],
                answer: "Describing states, actions, goals, and costs",
                explanation: "Problem formulation is the process of deciding what actions and states to consider, given a goal.",
                page: 2,
                lecture: "Lecture 3: Problem Solving Agent"
            },
            {
                question: "Breadth-First Search (BFS) is guaranteed to find an optimal solution when:",
                options: ["The graph is weighted", "The heuristic is admissible", "All step costs are equal", "The depth is infinite"],
                answer: "All step costs are equal",
                explanation: "BFS is optimal if path cost is a non-decreasing function of the depth of the node (e.g., all step costs are equal).",
                page: 2,
                lecture: "Lecture 4: Uninformed Search"
            },
            {
                question: "Which evaluation criterion checks whether an algorithm will find a solution if one exists?",
                options: ["Time complexity", "Optimality", "Completeness", "Space complexity"],
                answer: "Completeness",
                explanation: "Completeness is the guarantee that the algorithm will find a solution when there is one.",
                page: 2,
                lecture: "Lecture 3: Problem Solving Agent"
            },
            {
                question: "In A*, if h(n)=0 for all nodes, A* behaves like:",
                options: ["Uniform-Cost Search", "Greedy Best-First Search", "Depth-First Search", "Random Search"],
                answer: "Uniform-Cost Search",
                explanation: "If h(n)=0, then f(n)=g(n), which is exactly Uniform-Cost Search.",
                page: 2,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "Depth-First Search (DFS) typically uses which data structure?",
                options: ["Queue (FIFO)", "Priority queue", "Hash table", "Stack (LIFO)"],
                answer: "Stack (LIFO)",
                explanation: "DFS expands the deepest node first, which corresponds to a LIFO (Last-In, First-Out) stack.",
                page: 2,
                lecture: "Lecture 4: Uninformed Search"
            },
            {
                question: "Which of the following is not an evaluation criterion for search strategies?",
                options: ["Completeness", "Heuristic accuracy", "Optimality", "Time and space complexity"],
                answer: "Heuristic accuracy",
                explanation: "The four standard criteria are completeness, optimality, time complexity, and space complexity.",
                page: 2,
                lecture: "Lecture 3: Problem Solving Agent"
            },

            // --- Page 3 ---
            {
                question: "Bidirectional search works by:",
                options: ["Searching backward only", "Searching forward only", "Random exploration", "Searching from start and goal until they meet"],
                answer: "Searching from start and goal until they meet",
                explanation: "Bidirectional search runs two simultaneous searches: one forward from the initial state and one backward from the goal.",
                page: 3,
                lecture: "Lecture 5: Uninformed Search 2"
            },
            {
                question: "An AI agent is best described as a system that:",
                options: ["Acts randomly in its environment", "Stores data without taking actions", "Uses sensors and actuators to achieve goals", "Applies logical rules only"],
                answer: "Uses sensors and actuators to achieve goals",
                explanation: "An agent perceives its environment through sensors and acts upon it through actuators.",
                page: 3,
                lecture: "Lecture 2: Intelligent Agents"
            },
            {
                question: "Which uninformed search algorithm is most likely to run out of memory in large search spaces?",
                options: ["DFS", "BFS", "IDS", "DLS"],
                answer: "BFS",
                explanation: "BFS keeps all expanded nodes in memory, leading to exponential space complexity.",
                page: 3,
                lecture: "Lecture 4: Uninformed Search"
            },
            {
                question: "The goal test in problem formulation is used to:",
                options: ["Define the state", "Determine if the current state is a goal state", "Assign heuristic values", "Expand the search tree"],
                answer: "Determine if the current state is a goal state",
                explanation: "The goal test determines whether a given state is a goal state.",
                page: 3,
                lecture: "Lecture 3: Problem Solving Agent"
            },
            {
                question: "Which search algorithm prunes less promising paths while focusing on optimal routes?",
                options: ["RBFS", "IDA*", "Hill climbing", "SMA*"],
                answer: "RBFS",
                explanation: "Recursive Best-First Search (RBFS) mimics standard best-first search but uses linear space.",
                page: 3,
                lecture: "Lecture 7: Memory Bounded Search"
            },
            {
                question: "Which of the following are optimization search algorithms?",
                options: ["Simulated Annealing", "Genetic Algorithm", "Hill Climbing", "All of them"],
                answer: "All of them",
                explanation: "All listed options are local search algorithms used for optimization problems.",
                page: 3,
                lecture: "Lecture 8: Local Search"
            },

            // --- Page 4 ---
            {
                question: "The Turing Test is mainly associated with which AI approach?",
                options: ["Acting humanly", "Acting rationally", "Thinking humanly", "Thinking rationally"],
                answer: "Acting humanly",
                explanation: "The Turing Test proposes a definition of intelligence based on the ability to act indistinguishably from a human.",
                page: 4,
                lecture: "Lecture 1: Introduction"
            },
            {
                question: "What is the key difference between DFS and BFS?",
                options: ["DFS uses a queue, BFS uses a stack", "DFS uses a stack, BFS uses a queue", "DFS is informed, BFS is uninformed", "DFS is optimal, BFS is not"],
                answer: "DFS uses a stack, BFS uses a queue",
                explanation: "DFS uses LIFO (Stack), while BFS uses FIFO (Queue) for the frontier.",
                page: 4,
                lecture: "Lecture 4: Uninformed Search"
            },
            {
                question: "A heuristic is consistent if:",
                options: ["h(n)=0 for all nodes", "h(n) <= c(n,n') + h(n')", "h(n) >= c(n,n') + h(n')", "h(n)=g(n)"],
                answer: "h(n) <= c(n,n') + h(n')",
                explanation: "Consistency requires that the heuristic estimate to the goal from n is no greater than the step cost to n' plus the estimated cost from n'.",
                page: 4,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "Which component of an AI agent is responsible for perceiving the environment?",
                options: ["Actuator", "Sensor", "Environment", "Performance measure"],
                answer: "Sensor",
                explanation: "Sensors are the devices through which an agent perceives its environment.",
                page: 4,
                lecture: "Lecture 2: Intelligent Agents"
            },
            {
                question: "Which search strategy expands the shallowest unexpanded node first?",
                options: ["DFS", "BFS", "Greedy search", "Hill climbing"],
                answer: "BFS",
                explanation: "Breadth-First Search always expands the shallowest unexpanded node.",
                page: 4,
                lecture: "Lecture 4: Uninformed Search"
            },

            // --- Page 5 ---
            {
                question: "Which algorithm combines the advantages of BFS and DFS while limiting memory usage?",
                options: ["BFS", "DFS", "Iterative Deepening Search (IDS)", "Uniform-Cost Search"],
                answer: "Iterative Deepening Search (IDS)",
                explanation: "IDS has the completeness and optimality of BFS but the linear space complexity of DFS.",
                page: 5,
                lecture: "Lecture 5: Uninformed Search 2"
            },
            {
                question: "In uninformed search, the algorithm:",
                options: ["Uses domain-specific knowledge", "Uses heuristics", "Has no additional problem-specific information", "Always finds the optimal solution"],
                answer: "Has no additional problem-specific information",
                explanation: "Uninformed search strategies have no additional information about states beyond the problem definition.",
                page: 5,
                lecture: "Lecture 4: Uninformed Search"
            },
            {
                question: "Which search algorithm uses both path cost and heuristic information?",
                options: ["BFS", "DFS", "A*", "DLS"],
                answer: "A*",
                explanation: "A* uses the evaluation function f(n) = g(n) + h(n).",
                page: 5,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "Which type of agent maintains an internal model of the environment?",
                options: ["Simple reflex agent", "Model-based reflex agent", "Random agent", "Utility-based agent"],
                answer: "Model-based reflex agent",
                explanation: "Model-based agents maintain an internal state to track aspects of the world that are not currently evident.",
                page: 5,
                lecture: "Lecture 2: Intelligent Agents"
            },
            {
                question: "Which algorithm is most suitable for problems with very large or infinite state spaces and limited memory?",
                options: ["BFS", "DFS", "IDA*", "Uniform-Cost Search"],
                answer: "IDA*",
                explanation: "IDA* (Iterative Deepening A*) is memory efficient (linear space) and optimal.",
                page: 5,
                lecture: "Lecture 7: Memory Bounded Search"
            },
            {
                question: "What happens if a heuristic overestimates the true cost to the goal in A*?",
                options: ["A* becomes faster but still optimal", "A* may fail to find the optimal solution", "A* becomes identical to BFS", "A* becomes complete but not optimal"],
                answer: "A* may fail to find the optimal solution",
                explanation: "If h(n) overestimates the cost (is inadmissible), A* is not guaranteed to find the optimal solution.",
                page: 5,
                lecture: "Lecture 6: Informed Search"
            },

            // --- Page 6 ---
            {
                question: "Which performance measure evaluates how good the solution is compared to others?",
                options: ["Completeness", "Time complexity", "Optimality", "Space complexity"],
                answer: "Optimality",
                explanation: "Optimality is the ability of the algorithm to find the highest quality solution (lowest cost).",
                page: 6,
                lecture: "Lecture 3: Problem Solving Agent"
            },
            {
                question: "Which agent type selects actions to maximize expected performance?",
                options: ["Simple reflex agent", "Model-based agent", "Goal-based agent", "Utility-based agent"],
                answer: "Utility-based agent",
                explanation: "Utility-based agents allow a comparison of different world states according to exactly how 'happy' they would make the agent.",
                page: 6,
                lecture: "Lecture 2: Intelligent Agents"
            },

            // ============================================================
            // TRUE / FALSE QUESTIONS
            // ============================================================

            // --- Page 7 ---
            {
                question: "The primary advantage of informed search algorithms over uninformed search is the use of heuristics to guide the search.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Informed search uses problem-specific knowledge (heuristics) to find solutions more efficiently.",
                page: 7,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "In informed search, the heuristic represents the cost from the initial state to the current node.",
                options: ["True", "False"],
                answer: "False",
                explanation: "The heuristic h(n) estimates the cost from the current node to the *goal*, not from the start.",
                page: 7,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "Breadth-First Search (BFS) is equivalent to Uniform-Cost Search when all step costs are equal to 1.",
                options: ["True", "False"],
                answer: "True",
                explanation: "When step costs are equal, the 'lowest cost' path is simply the shallowest path, which BFS finds.",
                page: 7,
                lecture: "Lecture 4: Uninformed Search"
            },
            {
                question: "Iterative Deepening Search combines the completeness of BFS with the low memory usage of DFS.",
                options: ["True", "False"],
                answer: "True",
                explanation: "IDS is complete and optimal like BFS, but has the linear space complexity of DFS.",
                page: 7,
                lecture: "Lecture 5: Uninformed Search 2"
            },
            {
                question: "The Traveling Salesman Problem is best solved using Hill Climbing.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Hill climbing often gets stuck in local maxima; algorithms like Genetic Algorithms or Simulated Annealing are better suited.",
                page: 7,
                lecture: "Lecture 8: Local Search"
            },
            {
                question: "In Hill Climbing, the search stops when the global maximum is reached.",
                options: ["True", "False"],
                answer: "False",
                explanation: "It stops when a local maximum is reached, which may or may not be the global maximum.",
                page: 7,
                lecture: "Lecture 8: Local Search"
            },
            {
                question: "Simulated Annealing can accept worse solutions with a certain probability to avoid local maxima.",
                options: ["True", "False"],
                answer: "True",
                explanation: "This allows the algorithm to escape local maxima.",
                page: 7,
                lecture: "Lecture 8: Local Search"
            },
            {
                question: "An online search algorithm can discover successors only for the state that it physically occupies.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Online search agents must physically be in a state to perceive its successors.",
                page: 7,
                lecture: "Lecture 10: Online Search"
            },
            {
                question: "Optimization search algorithms start with an initial solution and iteratively try to improve it.",
                options: ["True", "False"],
                answer: "True",
                explanation: "This describes local search algorithms like Hill Climbing and Simulated Annealing.",
                page: 7,
                lecture: "Lecture 8: Local Search"
            },
            {
                question: "In online search, the agent plans first and then acts, while in offline search it acts first and then plans.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Offline search plans first then acts. Online search interleaves planning and acting.",
                page: 7,
                lecture: "Lecture 10: Online Search"
            },
            {
                question: "Uniformed search algorithms use problem-specific knowledge to guide node expansion.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Uninformed (blind) search does not use problem-specific knowledge.",
                page: 7,
                lecture: "Lecture 4: Uninformed Search"
            },
            {
                question: "A heuristic function estimates the cost from the current node to the goal state.",
                options: ["True", "False"],
                answer: "True",
                explanation: "This is the definition of h(n).",
                page: 7,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "A* search is optimal if the heuristic used is admissible.",
                options: ["True", "False"],
                answer: "True",
                explanation: "For tree search, admissibility is sufficient for optimality.",
                page: 7,
                lecture: "Lecture 6: Informed Search"
            },
            {
                question: "Depth-First Search always finds the optimal solution if one exists.",
                options: ["True", "False"],
                answer: "False",
                explanation: "DFS is not optimal; it returns the first solution it finds, which may be a long path.",
                page: 7,
                lecture: "Lecture 4: Uninformed Search"
            },
            {
                question: "Local search algorithms typically keep only one current state in memory.",
                options: ["True", "False"],
                answer: "True",
                explanation: "Algorithms like Hill Climbing operate on a single current state (though some variants keep a few).",
                page: 7,
                lecture: "Lecture 8: Local Search"
            },
            {
                question: "Genetic Algorithms operate on a population of candidate solutions rather than a single solution.",
                options: ["True", "False"],
                answer: "True",
                explanation: "GAs use a population of strings (chromosomes).",
                page: 7,
                lecture: "Lecture 9: Genetic Algorithms"
            },
            {
                question: "Hill Climbing is guaranteed to find the global optimum if the search space is finite.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Even in finite spaces, it can get stuck in local optima, ridges, or plateaus.",
                page: 7,
                lecture: "Lecture 8: Local Search"
            },
            {
                question: "In online search, the agent has complete knowledge of the environment before acting.",
                options: ["True", "False"],
                answer: "False",
                explanation: "Online search agents operate in unknown environments and learn as they go.",
                page: 7,
                lecture: "Lecture 10: Online Search"
            },
            {
                question: "Simulated Annealing gradually reduces randomness in decision-making as the search progresses.",
                options: ["True", "False"],
                answer: "True",
                explanation: "The 'temperature' parameter decreases over time, reducing the probability of accepting worse moves.",
                page: 7,
                lecture: "Lecture 8: Local Search"
            }
        ];
