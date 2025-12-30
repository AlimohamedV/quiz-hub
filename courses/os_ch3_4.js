// OS Chapters 3-4: Processes, Threads & Linux Commands
// Course data file for Quiz Hub

window.OS_CH3_4_DATA = [
            // ============================================================
            // CHAPTER 3: PROCESSES (Lecture 3)
            // ============================================================

            // --- Page 2 ---
            {
                question: "What is a program before it becomes a process?",
                options: ["An active entity in memory", "A passive entity stored on disk", "A running application", "A system call"],
                answer: "A passive entity stored on disk",
                page: 2,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "When does a program become a process?",
                options: ["When it is written by a programmer", "When it is compiled", "When an executable file is loaded into memory", "When it is saved on disk"],
                answer: "When an executable file is loaded into memory",
                page: 2,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Which of the following is NOT a component of a process in memory?",
                options: ["Text Section", "Data Section", "Compiler", "Stack"],
                answer: "Compiler",
                page: 2,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The text section of a process contains:",
                options: ["Global variables", "The program code", "Dynamically allocated memory", "Temporary data"],
                answer: "The program code",
                page: 2,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "What does the heap section of a process contain?",
                options: ["Function parameters", "Program code", "Memory dynamically allocated during runtime", "Global variables"],
                answer: "Memory dynamically allocated during runtime",
                page: 2,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The stack section contains:",
                options: ["Global variables only", "Program code only", "Function parameters, return addresses, and local variables", "Dynamically allocated memory only"],
                answer: "Function parameters, return addresses, and local variables",
                page: 2,
                lecture: "Chapter 3: Processes"
            },

            // --- Page 3 ---
            {
                question: "A Process Control Block (PCB) is used to:",
                options: ["Compile programs", "Represent a process in the operating system", "Store user data", "Manage disk space"],
                answer: "Represent a process in the operating system",
                page: 3,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Which information is NOT typically stored in a PCB?",
                options: ["Process identifier", "CPU registers", "Source code", "Process state"],
                answer: "Source code",
                page: 3,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The process state 'new' means:",
                options: ["The process is being executed", "The process is being created", "The process is waiting for I/O", "The process has finished"],
                answer: "The process is being created",
                page: 3,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "When a process is in the 'running' state, it means:",
                options: ["It is waiting for I/O", "Instructions are being executed", "It is in the ready queue", "It has been terminated"],
                answer: "Instructions are being executed",
                page: 3,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "A process in the 'waiting' state is:",
                options: ["Being executed by the CPU", "Ready to be assigned to a processor", "Waiting for some event to occur", "Being created"],
                answer: "Waiting for some event to occur",
                page: 3,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The 'ready' state means the process is:",
                options: ["Executing instructions", "Waiting to be assigned to a processor", "Waiting for I/O completion", "Terminated"],
                answer: "Waiting to be assigned to a processor",
                page: 3,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Which queue contains all processes in the system?",
                options: ["Ready queue", "Job queue", "Device queue", "Waiting queue"],
                answer: "Job queue",
                page: 3,
                lecture: "Chapter 3: Processes"
            },

            // --- Page 4 ---
            {
                question: "The ready queue contains processes that are:",
                options: ["Waiting for I/O devices", "Being created", "Residing in main memory, ready and waiting to execute", "Terminated"],
                answer: "Residing in main memory, ready and waiting to execute",
                page: 4,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Device queues contain processes:",
                options: ["Ready to execute", "Being created", "Waiting for an I/O device", "In the terminated state"],
                answer: "Waiting for an I/O device",
                page: 4,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The short-term scheduler is also known as:",
                options: ["Job scheduler", "CPU scheduler", "Medium-term scheduler", "Process scheduler"],
                answer: "CPU scheduler",
                page: 4,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "How frequently is the short-term scheduler invoked?",
                options: ["Every few seconds", "Every few minutes", "Every few milliseconds", "Once per hour"],
                answer: "Every few milliseconds",
                page: 4,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The long-term scheduler:",
                options: ["Selects which process should be executed next", "Selects which processes should be brought into the ready queue", "Removes processes from memory", "Manages I/O devices"],
                answer: "Selects which processes should be brought into the ready queue",
                page: 4,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The long-term scheduler controls:",
                options: ["CPU utilization", "The degree of multiprogramming", "I/O operations", "Memory allocation only"],
                answer: "The degree of multiprogramming",
                page: 4,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The medium-term scheduler is responsible for:",
                options: ["CPU scheduling", "Job admission", "Swapping processes between memory and disk", "Device management"],
                answer: "Swapping processes between memory and disk",
                page: 4,
                lecture: "Chapter 3: Processes"
            },

            // --- Page 5 ---
            {
                question: "What is swapping in the context of medium-term scheduling?",
                options: ["Exchanging data between processes", "Removing process from memory to disk and bringing it back", "Switching between user mode and kernel mode", "Changing process priorities"],
                answer: "Removing process from memory to disk and bringing it back",
                page: 5,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Cooperating processes are processes that:",
                options: ["Run independently without interaction", "Can affect or be affected by other processes", "Never share data", "Run only in kernel mode"],
                answer: "Can affect or be affected by other processes",
                page: 5,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Which is NOT a model of Interprocess Communication (IPC)?",
                options: ["Shared memory", "Message passing", "Direct hardware access", "Both A and B are IPC models"],
                answer: "Direct hardware access",
                page: 5,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "In the shared memory IPC model:",
                options: ["Processes exchange messages", "Processes share a region of memory", "Processes use system calls only", "Processes cannot communicate"],
                answer: "Processes share a region of memory",
                page: 5,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "In message passing IPC:",
                options: ["Processes share memory directly", "Processes communicate by exchanging messages", "No communication occurs", "Only the kernel can communicate"],
                answer: "Processes communicate by exchanging messages",
                page: 5,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The data section of a process contains:",
                options: ["Program code", "Global variables", "Local variables", "Function parameters"],
                answer: "Global variables",
                page: 5,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Which scheduler must be fast because it is invoked frequently?",
                options: ["Long-term scheduler", "Medium-term scheduler", "Short-term scheduler", "I/O scheduler"],
                answer: "Short-term scheduler",
                page: 5,
                lecture: "Chapter 3: Processes"
            },

            // --- Page 6 ---
            {
                question: "The program counter in a PCB stores:",
                options: ["The number of programs running", "The location of the next instruction to execute", "The process identifier", "The CPU utilization"],
                answer: "The location of the next instruction to execute",
                page: 6,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "CPU registers information in the PCB contains:",
                options: ["Contents of all process-centric registers", "Only the program counter", "Memory addresses only", "I/O device information"],
                answer: "Contents of all process-centric registers",
                page: 6,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Accounting information in the PCB includes:",
                options: ["Process state only", "CPU used and clock time elapsed since start", "Program code", "User passwords"],
                answer: "CPU used and clock time elapsed since start",
                page: 6,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "A program is an active entity while a process is a passive entity.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 6,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The text section of a process is typically read-only and might be shared by multiple processes.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 6,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The heap contains temporary data such as function parameters.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 6,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "A Process Control Block (PCB) is used to represent a process in the operating system.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 6,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "A process can only be in one of three states: new, running, or terminated.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 6,
                lecture: "Chapter 3: Processes"
            },

            // --- Page 7 ---
            {
                question: "The ready state means instructions are currently being executed.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The long-term scheduler is invoked more frequently than the short-term scheduler.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The short-term scheduler must be fast because it is invoked very frequently.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Device queues contain processes waiting for I/O devices.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Independent processes cannot affect or be affected by other processes in the system.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "Interprocess Communication (IPC) has only one model: shared memory.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The stack section contains global variables.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The long-term scheduler controls the degree of multiprogramming.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "The medium-term scheduler is responsible for swapping processes between memory and disk.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },
            {
                question: "All cooperating processes need interprocess communication (IPC).",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 7,
                lecture: "Chapter 3: Processes"
            },

            // ============================================================
            // CHAPTER 4: THREADS (Lecture 4)
            // ============================================================

            // --- Page 10 ---
            {
                question: "What is a thread?",
                options: ["A separate process", "A basic unit of CPU utilization", "An operating system", "A hardware component"],
                answer: "A basic unit of CPU utilization",
                page: 10,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "A thread comprises of:",
                options: ["Thread ID, program counter, register set, and stack", "Only a program counter", "Only memory space", "Only code section"],
                answer: "Thread ID, program counter, register set, and stack",
                page: 10,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Threads belonging to the same process share:",
                options: ["Their own stack", "Their own register set", "Code section, data section, and OS resources", "Nothing at all"],
                answer: "Code section, data section, and OS resources",
                page: 10,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Which of the following do threads NOT share?",
                options: ["Code section", "Data section", "Stack", "Open files"],
                answer: "Stack",
                page: 10,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "What problem do threads solve in program execution?",
                options: ["Memory allocation", "Seamless execution of multiple sections simultaneously", "Hardware failures", "Network connectivity"],
                answer: "Seamless execution of multiple sections simultaneously",
                page: 10,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "In a web browser, threads can be used for:",
                options: ["Displaying images while retrieving data from network", "Only displaying images", "Only retrieving network data", "Compiling code"],
                answer: "Displaying images while retrieving data from network",
                page: 10,
                lecture: "Chapter 4: Threads"
            },

            // --- Page 11 ---
            {
                question: "In a word processor, threads can handle:",
                options: ["Only displaying graphics", "Only spell checking", "Displaying graphics, responding to keystrokes, and spell checking", "Only saving files"],
                answer: "Displaying graphics, responding to keystrokes, and spell checking",
                page: 11,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Modern operating system kernels are:",
                options: ["Single-threaded", "Multithreaded", "Thread-free", "Process-only"],
                answer: "Multithreaded",
                page: 11,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Kernel threads perform tasks such as:",
                options: ["Managing devices, memory, and interrupt handling", "Only user interface display", "Only file editing", "Only network browsing"],
                answer: "Managing devices, memory, and interrupt handling",
                page: 11,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "On a single-core system, multithreading provides:",
                options: ["True parallelism", "Concurrent execution", "No benefit", "Hardware upgrade"],
                answer: "Concurrent execution",
                page: 11,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "On a multi-core system, multithreading provides:",
                options: ["Only concurrent execution", "True parallelism", "No advantage", "Slower execution"],
                answer: "True parallelism",
                page: 11,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "User threads are:",
                options: ["Supported above the kernel without kernel support", "Managed directly by the operating system", "Not supported in modern systems", "The same as kernel threads"],
                answer: "Supported above the kernel without kernel support",
                page: 11,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Kernel threads are:",
                options: ["Managed without kernel support", "Supported and managed directly by the operating system", "Not used in modern systems", "Only for user applications"],
                answer: "Supported and managed directly by the operating system",
                page: 11,
                lecture: "Chapter 4: Threads"
            },

            // --- Page 12 ---
            {
                question: "How many common multithreading models exist?",
                options: ["Two models", "Three models", "Four models", "Five models"],
                answer: "Three models",
                page: 12,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The One-to-One model maps:",
                options: ["Multiple user threads to one kernel thread", "One user thread to multiple kernel threads", "Each user thread to a kernel thread", "No mapping between threads"],
                answer: "Each user thread to a kernel thread",
                page: 12,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The One-to-One model allows:",
                options: ["Only single thread execution", "Multiple threads to run in parallel on multiprocessors", "No parallel execution", "Only sequential execution"],
                answer: "Multiple threads to run in parallel on multiprocessors",
                page: 12,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The main drawback of the One-to-One model is:",
                options: ["Poor performance", "No parallelism", "Creating user thread requires creating corresponding kernel thread", "Cannot use multiprocessors"],
                answer: "Creating user thread requires creating corresponding kernel thread",
                page: 12,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Which operating systems implement the One-to-One model?",
                options: ["Only Linux", "Only Windows", "Linux and Windows family", "None of the above"],
                answer: "Linux and Windows family",
                page: 12,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The Many-to-One model maps:",
                options: ["One user thread to one kernel thread", "Many user threads to one kernel thread", "One user thread to many kernel threads", "Many user threads to many kernel threads"],
                answer: "Many user threads to one kernel thread",
                page: 12,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The Many-to-Many model allows:",
                options: ["Only one-to-one mapping", "Many user threads to be mapped to many kernel threads", "No thread mapping", "Only single thread execution"],
                answer: "Many user threads to be mapped to many kernel threads",
                page: 12,
                lecture: "Chapter 4: Threads"
            },

            // --- Page 13 ---
            {
                question: "In the Many-to-Many model, the operating system can:",
                options: ["Create only one kernel thread", "Create a sufficient number of kernel threads", "Not create any kernel threads", "Only use user threads"],
                answer: "Create a sufficient number of kernel threads",
                page: 13,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The Two-level model is similar to:",
                options: ["One-to-One model", "Many-to-One model", "Many-to-Many model", "No other model"],
                answer: "Many-to-Many model",
                page: 13,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The Two-level model allows:",
                options: ["No thread binding", "A user thread to be bound to a kernel thread", "Only many-to-one mapping", "Only one-to-one mapping"],
                answer: "A user thread to be bound to a kernel thread",
                page: 13,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Responsiveness as a benefit of threads means:",
                options: ["Faster CPU speed", "May allow continued execution if part of process is blocked", "More memory available", "Better network connection"],
                answer: "May allow continued execution if part of process is blocked",
                page: 13,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Resource sharing benefit of threads means:",
                options: ["Threads have separate memory spaces", "Threads share resources of process", "Threads cannot share anything", "Threads need message passing only"],
                answer: "Threads share resources of process",
                page: 13,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Economy benefit of threads refers to:",
                options: ["Threads are more expensive than processes", "Thread creation and switching is cheaper than process operations", "Threads use more memory", "Threads are slower"],
                answer: "Thread creation and switching is cheaper than process operations",
                page: 13,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Scalability benefit of threads means:",
                options: ["Process cannot use multiple processors", "Process can take advantage of multiprocessor architectures", "Only single processor can be used", "Threads slow down execution"],
                answer: "Process can take advantage of multiprocessor architectures",
                page: 13,
                lecture: "Chapter 4: Threads"
            },

            // --- Page 14 ---
            {
                question: "A thread library provides:",
                options: ["Hardware drivers", "API for creating and managing threads", "Operating system kernel", "Network protocols"],
                answer: "API for creating and managing threads",
                page: 14,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "How many main thread libraries are commonly used today?",
                options: ["One", "Two", "Three", "Four"],
                answer: "Three",
                page: 14,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Which is NOT one of the three main thread libraries?",
                options: ["POSIX Pthreads", "Windows threads", "Java threads", "Linux System threads"],
                answer: "Linux System threads",
                page: 14,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "A thread shares its stack with other threads in the same process.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 14,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Threads allow seamless execution of multiple sections of a program simultaneously.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 14,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Most modern software applications are multithreaded.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 14,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "A web browser can use one thread for display and another for network retrieval.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 14,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Modern operating system kernels are single-threaded.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 14,
                lecture: "Chapter 4: Threads"
            },

            // --- Page 15 ---
            {
                question: "Multithreading on a single-core system provides true parallelism.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "User threads are managed directly by the operating system kernel.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Kernel threads are supported and managed by the operating system.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The One-to-One model maps each user thread to a kernel thread.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Linux implements the Many-to-One threading model.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The main drawback of the One-to-One model is the overhead of creating kernel threads.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The Many-to-Many model allows the developer to create as many user threads as needed.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "The Two-level model is identical to the One-to-One model.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Thread switching has lower overhead than process context switching.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },
            {
                question: "Threads are more expensive to create than processes.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                page: 15,
                lecture: "Chapter 4: Threads"
            },

            // ============================================================
            // LINUX COMMANDS
            // ============================================================

            // --- Page 18 ---
            {
                question: "What does the pwd command do?",
                options: ["Print working directory", "Password", "Power down", "Print word document"],
                answer: "Print working directory",
                page: 18,
                lecture: "Linux Commands"
            },
            {
                question: "Which command lists all files including hidden files?",
                options: ["ls", "ls -a", "ls -l", "ls -h"],
                answer: "ls -a",
                page: 18,
                lecture: "Linux Commands"
            },
            {
                question: "What does ls -s display?",
                options: ["File sizes in blocks", "Hidden files", "Sorted files", "System files"],
                answer: "File sizes in blocks",
                page: 18,
                lecture: "Linux Commands"
            },
            {
                question: "Which command shows file sizes in human-readable format?",
                options: ["ls -s", "ls -h", "ls -sh", "ls -a"],
                answer: "ls -sh",
                page: 18,
                lecture: "Linux Commands"
            },
            {
                question: "What does cd ~ do?",
                options: ["Change to home directory", "Change to root directory", "Change to previous directory", "Create directory"],
                answer: "Change to home directory",
                page: 18,
                lecture: "Linux Commands"
            },

            // --- Page 19 ---
            {
                question: "What does cd .. do?",
                options: ["Move up one directory level", "Move to home directory", "List directories", "Create directory"],
                answer: "Move up one directory level",
                page: 19,
                lecture: "Linux Commands"
            },
            {
                question: "Which command is used to change directories?",
                options: ["mkdir", "cd", "pwd", "ls"],
                answer: "cd",
                page: 19,
                lecture: "Linux Commands"
            },
            {
                question: "How do you navigate to your home directory?",
                options: ["cd /", "cd ~", "cd home", "Both a and b"],
                answer: "cd ~",
                page: 19,
                lecture: "Linux Commands"
            },
            {
                question: "What does the mkdir command do?",
                options: ["Make file", "Make directory", "Move directory", "Modify directory"],
                answer: "Make directory",
                page: 19,
                lecture: "Linux Commands"
            },
            {
                question: "Which command creates an empty file?",
                options: ["create", "new", "touch", "makefile"],
                answer: "touch",
                page: 19,
                lecture: "Linux Commands"
            },

            // --- Page 20 ---
            {
                question: "What does touch filename.txt do?",
                options: ["Deletes the file", "Creates an empty file or updates timestamp", "Opens the file", "Copies the file"],
                answer: "Creates an empty file or updates timestamp",
                page: 20,
                lecture: "Linux Commands"
            },
            {
                question: "What does the echo command do?",
                options: ["Repeat sound", "Display text on terminal", "Delete files", "Edit files"],
                answer: "Display text on terminal",
                page: 20,
                lecture: "Linux Commands"
            },
            {
                question: "What does echo 'text' > file.txt do?",
                options: ["Appends text to file", "Displays text", "Writes text to file (overwrites existing content)", "Deletes the file"],
                answer: "Writes text to file (overwrites existing content)",
                page: 20,
                lecture: "Linux Commands"
            },
            {
                question: "Which symbol is used for output redirection?",
                options: ["<", ">", "|", "&"],
                answer: ">",
                page: 20,
                lecture: "Linux Commands"
            },
            {
                question: "What does the cat command do?",
                options: ["Concatenate and display file contents", "Create a file", "Delete a file", "Categorize files"],
                answer: "Concatenate and display file contents",
                page: 20,
                lecture: "Linux Commands"
            },

            // --- Page 21 ---
            {
                question: "Which command would you use to view the contents of a text file?",
                options: ["view", "cat", "see", "show"],
                answer: "cat",
                page: 21,
                lecture: "Linux Commands"
            },
            {
                question: "What does rmdir do?",
                options: ["Remove file", "Remove empty directory", "Remove any directory", "Rename directory"],
                answer: "Remove empty directory",
                page: 21,
                lecture: "Linux Commands"
            },
            {
                question: "Which command removes files?",
                options: ["delete", "remove", "rm", "del"],
                answer: "rm",
                page: 21,
                lecture: "Linux Commands"
            },
            {
                question: "What does rm -r do?",
                options: ["Remove read-only files", "Remove directories recursively", "Remove recent files", "Restore files"],
                answer: "Remove directories recursively",
                page: 21,
                lecture: "Linux Commands"
            },
            {
                question: "What's the difference between rm and rmdir?",
                options: ["No difference", "rm removes files, rmdir removes empty directories", "rm is faster", "rmdir is safer"],
                answer: "rm removes files, rmdir removes empty directories",
                page: 21,
                lecture: "Linux Commands"
            },

            // --- Page 22 ---
            {
                question: "What does cp source destination do?",
                options: ["Change permissions", "Copy file from source to destination", "Compare files", "Create path"],
                answer: "Copy file from source to destination",
                page: 22,
                lecture: "Linux Commands"
            },
            {
                question: "What does the -r flag do in cp -r?",
                options: ["Remove files", "Copy recursively (including directories)", "Read-only copy", "Reverse copy"],
                answer: "Copy recursively (including directories)",
                page: 22,
                lecture: "Linux Commands"
            },
            {
                question: "Which command copies a directory and all its contents?",
                options: ["cp", "cp -r", "copy", "cpdir"],
                answer: "cp -r",
                page: 22,
                lecture: "Linux Commands"
            },
            {
                question: "What does mv source destination do?",
                options: ["Make virtual", "Move or rename files/directories", "Modify version", "Mount volume"],
                answer: "Move or rename files/directories",
                page: 22,
                lecture: "Linux Commands"
            },
            {
                question: "How do you rename a file in Linux?",
                options: ["rename old new", "mv old_name new_name", "rn old new", "change old new"],
                answer: "mv old_name new_name",
                page: 22,
                lecture: "Linux Commands"
            },

            // --- Page 23 ---
            {
                question: "What's the difference between cp and mv?",
                options: ["No difference", "cp copies, mv moves (original is deleted)", "mv is faster", "cp is safer"],
                answer: "cp copies, mv moves (original is deleted)",
                page: 23,
                lecture: "Linux Commands"
            },
            {
                question: "What does --help do?",
                options: ["Call technical support", "Display command help information", "Help other users", "Fix errors"],
                answer: "Display command help information",
                page: 23,
                lecture: "Linux Commands"
            },
            {
                question: "Which command displays the manual page for a command?",
                options: ["help", "info", "man", "manual"],
                answer: "man",
                page: 23,
                lecture: "Linux Commands"
            },
            {
                question: "How would you get help for the ls command?",
                options: ["ls --help", "man ls", "Both a and b", "help ls"],
                answer: "Both a and b",
                page: 23,
                lecture: "Linux Commands"
            },
            {
                question: "What does the date command do?",
                options: ["Set system date", "Display current date and time", "Calculate dates", "Format dates"],
                answer: "Display current date and time",
                page: 23,
                lecture: "Linux Commands"
            },

            // --- Page 24 ---
            {
                question: "What does the cal command display?",
                options: ["Calculator", "Calendar", "Calibration", "Call log"],
                answer: "Calendar",
                page: 24,
                lecture: "Linux Commands"
            },
            {
                question: "What does the top command do?",
                options: ["Move to top directory", "Display top files", "Display running processes and system resources", "Display top users"],
                answer: "Display running processes and system resources",
                page: 24,
                lecture: "Linux Commands"
            },
            {
                question: "What does ls -l display?",
                options: ["Long listing format with detailed information", "List of links", "Latest files", "Linux files only"],
                answer: "Long listing format with detailed information",
                page: 24,
                lecture: "Linux Commands"
            },
            {
                question: "In ls -l output, what does the first character indicate?",
                options: ["File size", "File type (- for file, d for directory)", "File owner", "File permissions"],
                answer: "File type (- for file, d for directory)",
                page: 24,
                lecture: "Linux Commands"
            },
            {
                question: "What does sudo apt install ncal do?",
                options: ["Install the ncal package", "Remove ncal", "Update ncal", "Configure ncal"],
                answer: "Install the ncal package",
                page: 24,
                lecture: "Linux Commands"
            },

            // --- Page 25 ---
            {
                question: "What does sudo apt remove ncal do?",
                options: ["Install ncal", "Remove the ncal package", "Update ncal", "Repair ncal"],
                answer: "Remove the ncal package",
                page: 25,
                lecture: "Linux Commands"
            },
            {
                question: "What does sudo stand for?",
                options: ["Super do", "Superuser do", "System undo", "Secure domain"],
                answer: "Superuser do",
                page: 25,
                lecture: "Linux Commands"
            },
            {
                question: "Which command sequence creates a directory and navigates into it?",
                options: ["mkdir folder; cd folder", "cd folder; mkdir folder", "create folder; open folder", "make folder; enter folder"],
                answer: "mkdir folder; cd folder",
                page: 25,
                lecture: "Linux Commands"
            },
            {
                question: "How do you copy a file and rename it in one command?",
                options: ["cp file1 file2", "mv file1 file2", "copy file1 to file2", "rename file1 file2"],
                answer: "cp file1 file2",
                page: 25,
                lecture: "Linux Commands"
            },
            {
                question: "Which command shows hidden files with detailed information?",
                options: ["ls -a -l", "ls -al", "Both a and b", "ls -h"],
                answer: "Both a and b",
                page: 25,
                lecture: "Linux Commands"
            },

            // --- Page 26 ---
            {
                question: "What happens if you use rm -r on a non-empty directory?",
                options: ["Error message", "Removes directory and all contents", "Removes only empty subdirectories", "Nothing happens"],
                answer: "Removes directory and all contents",
                page: 26,
                lecture: "Linux Commands"
            },
            {
                question: "What's the purpose of the touch command on an existing file?",
                options: ["Delete the file", "Update the file's timestamp", "Lock the file", "Copy the file"],
                answer: "Update the file's timestamp",
                page: 26,
                lecture: "Linux Commands"
            },
            {
                question: "What does echo 'Hello' >> file.txt do (note the >>)?",
                options: ["Overwrites file with 'Hello'", "Appends 'Hello' to the end of file", "Displays 'Hello'", "Creates a new file"],
                answer: "Appends 'Hello' to the end of file",
                page: 26,
                lecture: "Linux Commands"
            },
            {
                question: "Which command would you use to see the current month's calendar?",
                options: ["date", "cal", "calendar", "month"],
                answer: "cal",
                page: 26,
                lecture: "Linux Commands"
            },
            {
                question: "What information does ls -l NOT show?",
                options: ["File permissions", "File size", "File contents", "Last modification time"],
                answer: "File contents",
                page: 26,
                lecture: "Linux Commands"
            },

            // --- Page 27 ---
            {
                question: "Before removing a directory with rm -r, what should you do?",
                options: ["Nothing", "Verify the path and contents", "Run it twice", "Use sudo"],
                answer: "Verify the path and contents",
                page: 27,
                lecture: "Linux Commands"
            },
            {
                question: "Which is safer for viewing file contents?",
                options: ["cat (for small files)", "rm", "mv", "cp"],
                answer: "cat (for small files)",
                page: 27,
                lecture: "Linux Commands"
            },
            {
                question: "What does cd without any arguments do?",
                options: ["Shows error", "Takes you to home directory", "Does nothing", "Lists directories"],
                answer: "Takes you to home directory",
                page: 27,
                lecture: "Linux Commands"
            },
            {
                question: "How can you cancel a command that's currently running (like top)?",
                options: ["Close terminal", "Press Ctrl+C", "Type exit", "Restart computer"],
                answer: "Press Ctrl+C",
                page: 27,
                lecture: "Linux Commands"
            },
            {
                question: "Which command combination shows file sizes in human-readable format with hidden files?",
                options: ["ls -sh -a", "ls -sha", "ls -ash", "All of the above"],
                answer: "All of the above",
                page: 27,
                lecture: "Linux Commands"
            }
        ];
