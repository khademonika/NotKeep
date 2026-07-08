import { FilePlus2, FileText, LayoutDashboard, ListChecks, Search } from "lucide-react";

export const NOTES = [
  {
    id: 1,
    title: "Quantum Mechanics Basics",
    tag: "Physics",
    lastEdited: "2h ago",
    createdDate: "Jun 20, 2026",
    updatedDate: "Jul 8, 2026",
    createdRank: 2,
    updatedRank: 1,
    daysAgo: 0,
    aiSummary: true,
    favorite: true,
    preview:
      "Wave-particle duality, the uncertainty principle, and how the Schrodinger equation describes probability rather than position.",
    content:
      "Quantum mechanics replaces the deterministic picture of classical physics with probability. A particle's state is described by a wavefunction, and the Schrodinger equation tells us how that wavefunction evolves over time.\n\nKey ideas:\n- Wave-particle duality: light and matter show both wave and particle behaviour depending on how you measure them.\n- Heisenberg uncertainty: position and momentum can't both be known precisely at once.\n- Superposition: a system can exist in multiple states until it's measured.\n\nFor the exam, focus on the double-slit experiment and be ready to explain why observation changes the outcome.",
  },
  {
    id: 2,
    title: "Linear Algebra: Eigenvectors",
    tag: "Math",
    lastEdited: "5h ago",
    createdDate: "Jun 15, 2026",
    updatedDate: "Jul 8, 2026",
    createdRank: 3,
    updatedRank: 3,
    daysAgo: 0,
    aiSummary: true,
    favorite: false,
    preview:
      "An eigenvector of a matrix points in a direction that stays fixed under the transformation, only scaled by the eigenvalue.",
    content:
      "An eigenvector v of a matrix A satisfies Av = lambda v, where lambda is the eigenvalue.\n\nTo find eigenvalues, solve det(A - lambda I) = 0. This gives the characteristic polynomial. Once you have lambda, substitute back to solve for v.\n\nApplications include principal component analysis, stability analysis of systems, and Google's original PageRank algorithm.",
  },
  {
    id: 3,
    title: "The Fall of Rome — Causes",
    tag: "History",
    lastEdited: "1d ago",
    createdDate: "May 28, 2026",
    updatedDate: "Jul 7, 2026",
    createdRank: 7,
    updatedRank: 5,
    daysAgo: 1,
    aiSummary: false,
    favorite: true,
    preview:
      "Economic strain, overexpansion, and repeated invasions combined with political instability to erode the Western Empire.",
    content:
      "Historians generally point to a combination of factors rather than one single cause.\n\n1. Economic troubles: heavy taxation, inflation, and reliance on slave labour weakened production.\n2. Military overextension: the empire's borders became too long to defend effectively.\n3. Political instability: frequent changes in leadership and civil wars fractured authority.\n4. External pressure: Gothic and Hunnic invasions accelerated the collapse.\n\nRemember to cite Gibbon's Decline and Fall as the classic (if dated) reference point.",
  },
  {
    id: 4,
    title: "React Hooks Cheat Sheet",
    tag: "Programming",
    lastEdited: "3h ago",
    createdDate: "Jul 6, 2026",
    updatedDate: "Jul 8, 2026",
    createdRank: 1,
    updatedRank: 2,
    daysAgo: 0,
    aiSummary: true,
    favorite: true,
    preview:
      "useState for local state, useEffect for side effects, useMemo and useCallback for memoization, useRef for mutable values.",
    content:
      "useState(initial) returns [value, setValue] and triggers a re-render on change.\n\nuseEffect(fn, deps) runs fn after render, and re-runs whenever a value in deps changes. An empty array means it runs once.\n\nuseMemo and useCallback both cache work between renders — useMemo caches a value, useCallback caches a function reference.\n\nuseRef gives you a mutable box that persists across renders without causing one.",
  },
  {
    id: 5,
    title: "Weekend Meal Prep Ideas",
    tag: "Personal",
    lastEdited: "2d ago",
    createdDate: "Jul 3, 2026",
    updatedDate: "Jul 6, 2026",
    createdRank: 4,
    updatedRank: 7,
    daysAgo: 2,
    aiSummary: false,
    favorite: false,
    preview:
      "Overnight oats for breakfast, grilled chicken and rice bowls for lunch, and a big batch of roasted vegetables.",
    content:
      "Breakfast: overnight oats with chia seeds, split into five jars on Sunday night.\n\nLunch: grilled chicken thighs, jasmine rice, and a quick pickled cucumber salad. Cook once, portion into containers.\n\nDinner: roast a full tray of vegetables (broccoli, carrots, sweet potato) — reheats well and pairs with anything.",
  },
  {
    id: 6,
    title: "Thermodynamics: Entropy",
    tag: "Physics",
    lastEdited: "6h ago",
    createdDate: "Jun 10, 2026",
    updatedDate: "Jul 8, 2026",
    createdRank: 5,
    updatedRank: 4,
    daysAgo: 0,
    aiSummary: true,
    favorite: false,
    preview:
      "Entropy is a measure of disorder — the second law says total entropy of an isolated system never decreases.",
    content:
      "The second law of thermodynamics states that entropy in an isolated system tends to increase over time. This is why heat flows from hot to cold and not the other way around without external work.\n\nStatistically, entropy measures the number of microscopic configurations consistent with a macroscopic state. More possible configurations means higher entropy.",
  },
  {
    id: 7,
    title: "Sorting Algorithms Compared",
    tag: "Programming",
    lastEdited: "1d ago",
    createdDate: "Jun 30, 2026",
    updatedDate: "Jul 7, 2026",
    createdRank: 6,
    updatedRank: 6,
    daysAgo: 1,
    aiSummary: false,
    favorite: false,
    preview:
      "Quicksort averages O(n log n) but degrades on sorted input; mergesort guarantees O(n log n) with extra memory.",
    content:
      "Bubble sort: O(n^2), rarely used outside teaching.\n\nQuicksort: average O(n log n), worst case O(n^2) on already-sorted input unless you randomize the pivot.\n\nMergesort: guaranteed O(n log n), stable, but needs O(n) extra space.\n\nFor interviews, be ready to implement quicksort from memory and explain why the pivot choice matters.",
  },
  {
    id: 8,
    title: "Budget Tracker Notes",
    tag: "Personal",
    lastEdited: "4d ago",
    createdDate: "Jun 25, 2026",
    updatedDate: "Jul 4, 2026",
    createdRank: 8,
    updatedRank: 8,
    daysAgo: 4,
    aiSummary: false,
    favorite: false,
    preview:
      "Rent and utilities take up 40% of income this month — look at trimming the subscription list.",
    content:
      "Fixed costs: rent, utilities, phone plan — roughly 40% of monthly income.\n\nVariable costs: groceries and transport are within budget this month.\n\nAction item: cancel two unused subscriptions and move $150 into savings automatically on payday.",
  },
];
export const INITIAL_TODOS = [
  { id: 1, title: "Review quantum mechanics notes before exam", dueDate: "Jul 12", completed: false },
  { id: 2, title: "Finish linear algebra homework set 4", dueDate: "Jul 10", completed: false },
  { id: 3, title: "Outline the Fall of Rome essay", dueDate: "", completed: false },
  { id: 4, title: "Upload history reading PDF", dueDate: "Jul 5", completed: true },
  { id: 5, title: "Set up practice repo for sorting algorithms", dueDate: "", completed: true },
];

export const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "create", label: "Create Note", icon: FilePlus2 },
  { id: "search", label: "Search Notes", icon: Search },
  { id: "show", label: "Show Notes", icon: FileText },
  { id: "todo", label: "Todo", icon: ListChecks },
];
export const SUBJECTS = ["All", "Physics", "Math", "History", "Programming", "Personal"];