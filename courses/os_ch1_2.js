// OS Chapters 1-2: Introduction & System Structures
// Course data file for Quiz Hub

window.OS_CH1_2_DATA = [
            // ============================================================
            // CHAPTER 1: INTRODUCTION
            // ============================================================

            {
                question: "An operating system acts as an intermediary between:",
                options: ["User and hardware", "Hardware and software", "Compiler and hardware", "Application and compiler"],
                answer: "User and hardware",
                explanation: "The operating system is a program that manages computer hardware and acts as an intermediary between the computer user and the computer hardware[cite: 817, 821].",
                page: 10,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "What is the primary goal of an operating system?",
                options: ["To make the computer system convenient to use", "To use computer hardware efficiently", "To act as an interface between user and hardware", "To provide network services"],
                answer: "To act as an interface between user and hardware",
                explanation: "The OS goals are to execute user programs, make solving problems easier, make the system convenient to use, and use hardware efficiently[cite: 830, 831, 832].",
                page: 12,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Which of the following is a batch processing system?",
                options: ["Mainframe computers", "Personal computers", "Handheld computers", "Embedded systems"],
                answer: "Mainframe computers",
                explanation: "Mainframes or minicomputers are shared computers where resource utilization is important to keep all users happy[cite: 839, 840].",
                page: 13,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "An operating system is a resource allocator and control program.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "The OS acts as a resource allocator (managing CPU time, memory, I/O) and a control program to prevent errors and improper use[cite: 846, 848, 851, 854].",
                page: 14,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "The operating system kernel is:",
                options: ["Always in memory", "Loaded on demand", "Stored in secondary storage", "Part of application software"],
                answer: "Always in memory",
                explanation: "The kernel is the one program running at all times on the computer[cite: 858].",
                page: 16,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "The bootstrap program is the first program to run when a computer is powered on.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "The bootstrap program is loaded at power-up or reboot and initializes all aspects of the system[cite: 876, 879].",
                page: 18,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Bootstrap program is stored in:",
                options: ["RAM", "ROM or EEPROM", "Hard disk", "Cache memory"],
                answer: "ROM or EEPROM",
                explanation: "It is typically stored in ROM or EPROM, generally known as firmware[cite: 878].",
                page: 18,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "GRUB is an example of:",
                options: ["Boot loader", "File system", "Shell", "System call"],
                answer: "Boot loader",
                explanation: "The bootstrap program initializes the system and loads the operating system kernel to start execution[cite: 879, 880].",
                page: 18,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "System boot process starts with:",
                options: ["Bootstrap program loading OS", "User login", "Application loading", "Network initialization"],
                answer: "Bootstrap program loading OS",
                explanation: "The bootstrap program loads the operating system kernel and starts execution[cite: 880].",
                page: 18,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "The main purpose of an interrupt is to:",
                options: ["Stop program execution permanently", "Signal CPU of an event requiring attention", "Transfer control to user program", "Allocate memory"],
                answer: "Signal CPU of an event requiring attention",
                explanation: "The occurrence of an event is usually signaled by an interrupt from either hardware or software[cite: 901].",
                page: 21,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Interrupts can only be generated by hardware devices.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "Hardware may trigger an interrupt by sending a signal to the CPU, and software may trigger one via a system call[cite: 903, 904].",
                page: 21,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Which interrupt is generated by the CPU itself?",
                options: ["Hardware interrupt", "Software interrupt (trap)", "External interrupt", "Timer interrupt"],
                answer: "Software interrupt (trap)",
                explanation: "Software may trigger an interrupt by executing a special operation called a system call or monitor call[cite: 904].",
                page: 21,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "The interrupt vector contains:",
                options: ["Addresses of interrupt service routines", "Interrupt priorities", "Device identifiers", "Process states"],
                answer: "Addresses of interrupt service routines",
                explanation: "The interrupt vector contains the addresses of all the service routines[cite: 909].",
                page: 22,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "A trap is a software-generated interrupt.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "A trap or exception is a software-generated interrupt caused either by an error or a user request[cite: 911].",
                page: 22,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "A trap is caused by:",
                options: ["Hardware failure", "Error or user request", "Timer", "I/O completion"],
                answer: "Error or user request",
                explanation: "A trap or exception is a software-generated interrupt caused by an error or user request[cite: 911].",
                page: 22,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Context switch involves:",
                options: ["Saving state of current process", "Loading state of new process", "Switching between processes", "Switching users"],
                answer: "Saving state of current process",
                explanation: "The OS preserves the state of the CPU by storing the registers and the program counter[cite: 930].",
                page: 24,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Context switching is overhead and does no useful work.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "During context switching, the OS saves the CPU state and determines which interrupt occurred, which is necessary management but not user program execution[cite: 930, 931].",
                page: 24,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "DMA (Direct Memory Access) is used for:",
                options: ["High-speed I/O devices", "CPU scheduling", "Memory allocation", "Process synchronization"],
                answer: "High-speed I/O devices",
                explanation: "DMA is indicated for high-speed devices to move blocks of data[cite: 1021, 1022].",
                page: 30,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "DMA transfers data directly between I/O device and CPU registers.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "DMA involves moving instructions and data directly into memory, bypassing constant CPU intervention[cite: 1021, 1022].",
                page: 30,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Which storage is volatile?",
                options: ["RAM", "ROM", "Hard disk", "Flash memory"],
                answer: "RAM",
                explanation: "Main memory is typically volatile[cite: 972].",
                page: 27,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Cache memory is:",
                options: ["Faster than main memory", "Slower than main memory", "Same speed as main memory", "Faster than registers"],
                answer: "Faster than main memory",
                explanation: "In the storage hierarchy, cache is faster than main memory[cite: 989, 1007, 1009].",
                page: 29,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "The memory hierarchy is ordered from fastest to slowest as:",
                options: ["Registers, cache, main memory, disk", "Cache, registers, main memory, disk", "Main memory, cache, registers, disk", "Disk, main memory, cache, registers"],
                answer: "Registers, cache, main memory, disk",
                explanation: "The hierarchy goes from registers (fastest) to cache, main memory, then magnetic disks[cite: 991, 992, 995, 1000].",
                page: 29,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Cache memory is larger but slower than main memory.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "Cache is smaller and faster than main memory[cite: 989, 990, 1007].",
                page: 29,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Asymmetric multiprocessing involves:",
                options: ["Master-slave relationship", "All processors equal", "No coordination needed", "Single processor only"],
                answer: "Master-slave relationship",
                explanation: "In Asymmetric Multiprocessing, each processor is assigned a specific task[cite: 1037].",
                page: 32,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Symmetric multiprocessing (SMP) means:",
                options: ["Each processor performs different tasks", "All processors are peers", "One processor is master", "Processors share no memory"],
                answer: "All processors are peers",
                explanation: "In Symmetric Multiprocessing, each processor performs all tasks[cite: 1038].",
                page: 32,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "In asymmetric multiprocessing, all processors are treated equally.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "In Asymmetric Multiprocessing, each processor is assigned a specific task, unlike SMP where each performs all tasks[cite: 1037, 1038].",
                page: 32,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Symmetric multiprocessing requires special master processor.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "In Symmetric Multiprocessing, each processor performs all tasks, meaning they are peers[cite: 1038].",
                page: 32,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Multicore systems have:",
                options: ["Multiple computing cores on single chip", "Multiple separate processors", "Single core with hyperthreading", "Multiple motherboards"],
                answer: "Multiple computing cores on single chip",
                explanation: "Multicore designs put multiple cores on a single chip[cite: 1057, 1058, 1060].",
                page: 34,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Multicore systems have multiple processors on separate chips.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "A dual-core design puts multiple cores on a single chip[cite: 1057, 1058].",
                page: 34,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "The degree of multiprogramming refers to:",
                options: ["Number of CPUs", "Number of processes in memory", "Number of users", "Number of I/O devices"],
                answer: "Number of processes in memory",
                explanation: "Multiprogramming keeps a subset of total jobs in memory so the CPU always has one to execute[cite: 1067, 1068].",
                page: 35,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "In multiprogramming, the CPU switches to another job when:",
                options: ["Current job finishes", "Current job waits for I/O", "Timer expires", "User requests it"],
                answer: "Current job waits for I/O",
                explanation: "When a job has to wait (for I/O for example), OS switches to another job[cite: 1070].",
                page: 35,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "A CPU bound process:",
                options: ["Requires more computation", "Spends more time in I/O", "Never performs I/O", "Uses only memory"],
                answer: "Requires more computation",
                explanation: "Multiprogramming is needed because a single user cannot keep CPU and I/O devices busy at all times[cite: 1067].",
                page: 35,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "An I/O bound process:",
                options: ["Spends more time doing I/O", "Requires more CPU time", "Never uses CPU", "Only uses disk"],
                answer: "Spends more time doing I/O",
                explanation: "The OS switches to another job when the current job must wait for I/O[cite: 1070].",
                page: 35,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Spooling allows overlap of I/O of one job with computation of another.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "Multiprogramming organizes jobs so the CPU always has one to execute even while others wait for I/O[cite: 1067, 1070].",
                page: 35,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "In multiprogramming, multiple programs are kept in memory simultaneously.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "A subset of total jobs in the system is kept in memory[cite: 1068].",
                page: 36,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Time-sharing systems primarily focus on:",
                options: ["Interactive computer system", "Batch processing", "Real-time processing", "Network services"],
                answer: "Interactive computer system",
                explanation: "Timesharing (multitasking) allows users to interact with each job while it is running, creating interactive computing[cite: 1082].",
                page: 37,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Virtual memory allows:",
                options: ["Execution of programs larger than physical memory", "Faster program execution", "Better GUI display", "Network communication"],
                answer: "Execution of programs larger than physical memory",
                explanation: "Virtual memory allows execution of processes not completely in memory[cite: 1084].",
                page: 37,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Turnaround time is:",
                options: ["Time from submission to completion", "Time in ready queue", "Time in execution", "Time in waiting"],
                answer: "Time from submission to completion",
                explanation: "In timesharing, response time should be < 1 second[cite: 1083].",
                page: 37,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Response time in interactive systems is:",
                options: ["Time from request to first response", "Total execution time", "Time to complete process", "Time in ready queue"],
                answer: "Time from request to first response",
                explanation: "In interactive computing, response time should be < 1 second[cite: 1083].",
                page: 37,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Time-sharing and multitasking are the same concept.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "Timesharing (multitasking) is a logical extension of multiprogramming[cite: 1082].",
                page: 37,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Virtual memory allows execution of processes that are not completely in memory.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "Virtual memory allows execution of processes not completely in memory[cite: 1084].",
                page: 37,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Dual-mode operation provides:",
                options: ["Protection for the operating system", "Faster execution", "Multiple user support", "Network communication"],
                answer: "Protection for the operating system",
                explanation: "Dual-mode operation allows OS to protect itself and other system components[cite: 1093].",
                page: 39,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "A mode bit is used to:",
                options: ["Distinguish between user and kernel mode", "Control I/O operations", "Manage memory", "Schedule processes"],
                answer: "Distinguish between user and kernel mode",
                explanation: "A bit, called the mode bit, is added to indicate the current mode: kernel (0) or user (1)[cite: 1097].",
                page: 40,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Privileged instructions can only be executed in:",
                options: ["User mode", "Kernel mode", "Both modes", "Protected mode only"],
                answer: "Kernel mode",
                explanation: "Some instructions are designated as privileged, only executable in kernel mode[cite: 1099].",
                page: 40,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "The kernel is the part of OS that runs in user mode.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "The kernel runs in kernel mode (mode bit = 0)[cite: 1113].",
                page: 41,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "A system call changes the mode from user mode to kernel mode.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "System call changes mode to kernel, return from call resets it to user[cite: 1100].",
                page: 41,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Privileged instructions can be executed in user mode.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "Privileged instructions are only executable in kernel mode[cite: 1099].",
                page: 41,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Caching is primarily used for:",
                options: ["Copying information to faster storage", "Backing up data", "Encrypting data", "Compressing data"],
                answer: "Copying information to faster storage",
                explanation: "The storage table shows that registers, cache, and main memory are all backed by slower storage[cite: 1116].",
                page: 42,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Protection mechanisms in OS:",
                options: ["Control access to resources", "Increase CPU speed", "Manage network traffic", "Compile programs"],
                answer: "Control access to resources",
                explanation: "Protection is any mechanism for controlling access of processes or users to resources defined by the OS[cite: 1128].",
                page: 43,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "In a computer system, protection is ensured by:",
                options: ["Hardware support only", "Operating system policies only", "Hardware and OS working together", "User programs"],
                answer: "Hardware and OS working together",
                explanation: "Dual-mode operation uses hardware (mode bit) to protect system components[cite: 1093, 1097].",
                page: 43,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "A clustered system is characterized by:",
                options: ["Multiple systems working together", "Single system with multiple cores", "Virtual machines on one system", "Distributed file systems only"],
                answer: "Multiple systems working together",
                explanation: "Distributed computing is a collection of separate systems networked together[cite: 1146].",
                page: 45,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Real-time systems are characterized by:",
                options: ["Strict time constraints", "High throughput", "Maximum CPU utilization", "Multiple users"],
                answer: "Strict time constraints",
                explanation: "Cloud Computing and other specialized environments deliver computing and storage as a service[cite: 1217].",
                page: 45,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Hard real-time systems:",
                options: ["Must meet deadlines always", "Can tolerate some deadline misses", "Are less critical than soft real-time", "Have no timing constraints"],
                answer: "Must meet deadlines always",
                explanation: "Cloud Computing delivering computing and storage requires specific services[cite: 1217].",
                page: 45,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Real-time systems must complete operations within strict time constraints.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "Distributed systems and cloud components require precise management[cite: 1146, 1217].",
                page: 45,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Hard real-time systems can tolerate occasional deadline misses.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "Hard real-time systems must meet all deadlines[cite: 1217].",
                page: 45,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Virtual machines provide:",
                options: ["Illusion of multiple machines", "Faster execution", "Less memory usage", "Direct hardware access"],
                answer: "Illusion of multiple machines",
                explanation: "Virtualization is a technology that allows operating systems to run as applications within other operating systems[cite: 1174].",
                page: 48,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Virtual machines provide complete protection between system components.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "Virtualization allows guest OSes to run isolated from each other[cite: 1174, 1177].",
                page: 48,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Which of the following is NOT a major OS component?",
                options: ["Process Management", "Memory Management", "Compiler Design", "Storage Management"],
                answer: "Compiler Design",
                explanation: "Application programs include compilers, but they are not listed as a core OS component like hardware management[cite: 794, 860].",
                page: 8,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Throughput refers to:",
                options: ["Number of processes completed per unit time", "Time to complete a process", "CPU utilization", "Response time"],
                answer: "Number of processes completed per unit time",
                explanation: "Increased throughput means getting more work done in less time[cite: 1030].",
                page: 31,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "Throughput is the number of processes completed per unit time.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "Increased throughput means we expect to get more work done in less time[cite: 1030].",
                page: 31,
                lecture: "Chapter 1: Introduction"
            },
            {
                question: "NUMA (Non-Uniform Memory Access) means:",
                options: ["Access time depends on memory location", "All memory access is uniform", "No memory sharing", "Only local memory exists"],
                answer: "Access time depends on memory location",
                explanation: "Storage hierarchy shows that access time varies significantly across different levels[cite: 989, 1007].",
                page: 29,
                lecture: "Chapter 1: Introduction"
            },

            // ============================================================
            // CHAPTER 2: OPERATING-SYSTEM STRUCTURES
            // ============================================================

            {
                question: "Which is NOT an OS service for users?",
                options: ["Program execution", "I/O operations", "Power management", "Communication"],
                answer: "Power management",
                explanation: "Services helpful to user include UI, program execution, I/O operations, file-system manipulation, communications, and error detection[cite: 1275, 1277, 1278, 1283, 1285, 1295].",
                page: 4,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Operating system services are provided for:",
                options: ["User convenience only", "System efficiency only", "User convenience and system efficiency", "Hardware management only"],
                answer: "User convenience and system efficiency",
                explanation: "OS services provide functions helpful to user and functions for ensuring efficient operation[cite: 1274, 1302].",
                page: 7,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "A user interface can be:",
                options: ["Command-line interface (CLI)", "Graphical user interface (GUI)", "Batch interface", "Any of these types"],
                answer: "Any of these types",
                explanation: "User interface varies between Command-Line (CLI), Graphics User Interface (GUI), and Batch[cite: 1276].",
                page: 4,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "A shell is:",
                options: ["Command interpreter", "Part of kernel", "Hardware component", "Device driver"],
                answer: "Command interpreter",
                explanation: "CLI or command interpreter (sometimes called shells) allows direct command entry[cite: 1336, 1339].",
                page: 10,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "The shell is part of the operating system kernel.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "CLI is sometimes implemented in kernel, but sometimes by system programs[cite: 1338].",
                page: 10,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "System calls provide:",
                options: ["Interface to OS services", "Direct hardware access", "Compiler functions", "Database operations"],
                answer: "Interface to OS services",
                explanation: "System calls are the programming interface to the services provided by the OS[cite: 1537].",
                page: 15,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "The main advantage of using API rather than system calls is:",
                options: ["Program portability", "Faster execution", "Less memory usage", "Better security"],
                answer: "Program portability",
                explanation: "Mostly accessed via high-level API rather than direct system call use[cite: 1539].",
                page: 15,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "An API (Application Programming Interface) is:",
                options: ["Set of functions available to programmers", "Hardware specification", "System call itself", "Operating system kernel"],
                answer: "Set of functions available to programmers",
                explanation: "Standard APIs like Win32, POSIX, and Java provide a set of functions for programmers[cite: 1540].",
                page: 15,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "APIs hide the details of system calls from programmers.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "System calls are mostly accessed by programs via high-level API rather than direct system call use[cite: 1539].",
                page: 15,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "System calls provide a means for user programs to request OS services.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "System calls are the programming interface to the services provided by the OS[cite: 1537].",
                page: 15,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "System call parameters can be passed by:",
                options: ["Registers", "Block or table in memory", "Stack", "Any of these methods"],
                answer: "Any of these methods",
                explanation: "System call parameters like file descriptors, buffers, and counts are passed to the function[cite: 1575].",
                page: 17,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Which is a process control system call?",
                options: ["fork()", "read()", "open()", "chmod()"],
                answer: "fork()",
                explanation: "Process control system calls include CreateProcess() and fork()[cite: 1598].",
                page: 19,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Which is a file management system call?",
                options: ["wait()", "create()", "malloc()", "signal()"],
                answer: "create()",
                explanation: "File manipulation system calls include CreateFile() and open()[cite: 1598].",
                page: 19,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "System calls for communication include:",
                options: ["send() and receive()", "open() and close()", "fork() and exec()", "malloc() and free()"],
                answer: "send() and receive()",
                explanation: "Communication system calls include CreatePipe() and shmget()[cite: 1598].",
                page: 19,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Which is NOT a type of system call?",
                options: ["Process control", "File management", "Compilation", "Device management"],
                answer: "Compilation",
                explanation: "Types of system calls include Process control, File management, Device management, Information maintenance, Communications, and Protection[cite: 1621, 1633, 1640, 1647, 1653, 1662].",
                page: 21,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "System programs provide:",
                options: ["Convenient environment for program development", "Kernel functions", "Hardware drivers.", "Network protocols"],
                answer: "Convenient environment for program development",
                explanation: "System programs provide a convenient environment for program development and execution[cite: 1668].",
                page: 27,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "System programs provide a convenient environment for program development and execution.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "System programs provide a convenient environment for program development and execution[cite: 1668].",
                page: 27,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "UNIX operating system structure consists of layers including:",
                options: ["Kernel at the core", "Shell at the core", "Applications at the core", "Drivers at the core"],
                answer: "Kernel at the core",
                explanation: "UNIX structure consists of hardware at the core, then kernel interface, then system libraries[cite: 1779].",
                page: 39,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "The MS-DOS operating system uses:",
                options: ["Single-tasking", "Multi-tasking", "Time-sharing", "Distributed processing"],
                answer: "Single-tasking",
                explanation: "MS-DOS is described as a simple structure[cite: 1764].",
                page: 37,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "MS-DOS was designed with a layered structure.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "MS-DOS is categorized as a simple structure, while other systems use a layered approach[cite: 1758, 1764, 1782].",
                page: 37,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Layered approach in OS design means:",
                options: ["OS divided into layers", "OS divided into modules", "OS as single unit", "OS distributed across network"],
                answer: "OS divided into layers",
                explanation: "In a layered approach, the OS is divided into layers where layer 0 is hardware and layer N is the user interface[cite: 1782, 1783, 1785].",
                page: 40,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "The main advantage of layered approach is:",
                options: ["Simplicity of construction", "High performance", "Less memory usage", "Faster execution"],
                answer: "Simplicity of construction",
                explanation: "The layered approach is one way to structure very large programs like general-purpose OSes[cite: 1756, 1757, 1760].",
                page: 40,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "The main disadvantage of layered approach is:",
                options: ["Careful planning required", "Easy to implement", "Very modular", "Highly portable"],
                answer: "Careful planning required",
                explanation: "Building and configuring an OS is a highly creative and complex task[cite: 1726].",
                page: 40,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Layered approach makes OS easier to debug and verify.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "Defining goals and specifications is the start of design, and structured approaches help manage complexity[cite: 1717, 1719].",
                page: 40,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "A microkernel provides:",
                options: ["Minimal process and memory management", "All OS services in kernel", "No process management", "Only file management"],
                answer: "Minimal process and memory management",
                explanation: "The microkernel moves as much from kernel into user space as possible[cite: 1789, 1813].",
                page: 41,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Microkernel architecture moves services to user space.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "The microkernel moves as much from the kernel into user space[cite: 1789].",
                page: 41,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "A monolithic kernel:",
                options: ["Has all services in kernel space", "Has minimal services in kernel", "Has no services in kernel", "Uses message passing only"],
                answer: "Has all services in kernel space",
                explanation: "In a Monolithic Kernel, VFS, IPC, File System, and Schedulers are all in kernel mode[cite: 1795, 1801, 1805].",
                page: 42,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Disadvantage of microkernel is:",
                options: ["Performance overhead of user-kernel communication", "Complex design", "No modularity", "Poor security"],
                answer: "Performance overhead of user-kernel communication",
                explanation: "Communication in a microkernel is done via message passing[cite: 1816, 1823].",
                page: 42,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "A monolithic kernel is more modular than a microkernel.",
                options: ["TRUE", "FALSE"],
                answer: "FALSE",
                explanation: "A microkernel is designed to be minimal by moving components to user space[cite: 1789, 1813].",
                page: 42,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Communication between processes can be achieved through:",
                options: ["Shared memory", "Message passing", "Either shared memory or message passing", "Files only"],
                answer: "Either shared memory or message passing",
                explanation: "In a microkernel system, application programs communicate with services via messages[cite: 1816, 1823].",
                page: 43,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Loadable kernel modules:",
                options: ["Can be loaded at boot or runtime", "Must be loaded at boot only", "Cannot be unloaded", "Are not used in modern OS"],
                answer: "Can be loaded at boot or runtime",
                explanation: "Loadable kernel modules are used to extend kernel functionality dynamically[cite: 1736].",
                page: 34,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Loadable kernel modules are more flexible than layered approach.",
                options: ["TRUE", "FALSE"],
                answer: "TRUE",
                explanation: "Scripting languages like PERL and Python are used for systems programs alongside C/C++[cite: 1736].",
                page: 34,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Operating system generation (OS gen) involves:",
                options: ["Configuring OS for specific hardware", "Updating OS kernel", "Installing applications", "Creating user accounts"],
                answer: "Configuring OS for specific hardware",
                explanation: "OS design is affected by choice of hardware and type of system[cite: 1720].",
                page: 32,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "The Java Virtual Machine (JVM):",
                options: ["Executes Java bytecode", "Executes machine code", "Executes assembly code", "Executes Python code"],
                answer: "Executes Java bytecode",
                explanation: "The Java API is for the Java virtual machine (JVM)[cite: 1540].",
                page: 15,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Debugging a system involves:",
                options: ["Finding and fixing errors", "Compiling programs", "Installing software", "Managing users"],
                answer: "Finding and fixing errors",
                explanation: "Debugging facilities enhance user's and programmer's abilities to efficiently use the system[cite: 1299].",
                page: 6,
                lecture: "Chapter 2: Operating-System Structures"
            },
            {
                question: "Benefits of microkernel include:",
                options: ["Easier to extend", "Better performance", "Less overhead", "Simpler design"],
                answer: "Easier to extend",
                explanation: "Internal structure of different OSes can vary widely, and modular designs like microkernels offer flexibility[cite: 1718].",
                page: 32,
                lecture: "Chapter 2: Operating-System Structures"
            }
        ];
