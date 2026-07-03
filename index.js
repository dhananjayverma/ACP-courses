/* ═══════════════════════════════════════════
   Application State
   ═══════════════════════════════════════════ */

const state = {
  activeCategoryId: "miscellaneous",
  activeSubcategoryId: null,   // null = no subcategory selected; show all category courses
  viewMode: "grid",
  categories: [
    {
      id: "miscellaneous",
      label: "Miscellaneous",
      count: 24,
      icon: "folder",
      active: true,
      expanded: true,
      subcategories: [
        { id: "acp-2025",         label: "ACP Courses 2025",  count: 8 },
        { id: "skill-development", label: "Skill Development",  count: 6 },
        { id: "orientation",       label: "Orientation",        count: 5 },
        { id: "workshops",         label: "Workshops",          count: 5 },
      ],
    },
    { id: "sample-courses", label: "Sample_Courses", count: 18, icon: "stack" },
    { id: "archived", label: "Archived", count: 12, icon: "archive" },
    { id: "even-25262", label: "EVEN_25262", count: 20, icon: "calendar" },
    { id: "odd-26271", label: "ODD_26271", count: 16, icon: "calendar" },
    { id: "test-demo", label: "Test/Demo Category", count: 8, icon: "lab" },
  ],
  stats: [
    { label: "Total Courses", value: "8", icon: "book" },
    { label: "Instructors", value: "8", icon: "users" },
    { label: "Students Enrolled", value: "456", icon: "group" },
    { label: "Last Updated", value: "2 days ago", icon: "clock" },
  ],
  courses: [
    {
      title: "Introduction to Statistical Concepts for Analytics",
      code: "25GPA157",
      badge: "ACP 2025",
      banner: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 40%, #6d28d9 100%)",
      accentMark: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
      mark: "chart",
      enrolled: 54,
      instructors: [
        { name: "Himani", role: "Instructor", color: "linear-gradient(135deg, #3b82f6, #2563eb)" },
        { name: "Nitika Kapoor", role: "Instructor", color: "linear-gradient(135deg, #ec4899, #db2777)" },
      ],
    },
    {
      title: "SAS Programming for R Users",
      code: "25GPA156",
      badge: "ACP 2025",
      banner: "linear-gradient(135deg, #e11d48 0%, #f43f5e 40%, #be123c 100%)",
      accentMark: "linear-gradient(135deg, #f43f5e, #fb7185)",
      mark: "R",
      enrolled: 48,
      instructors: [
        { name: "Himani", role: "Instructor", color: "linear-gradient(135deg, #3b82f6, #2563eb)" },
        { name: "Nitika Kapoor", role: "Instructor", color: "linear-gradient(135deg, #ec4899, #db2777)" },
      ],
    },
    {
      title: "Basics of Software Administration",
      code: "25GPA155",
      badge: "ACP 2025",
      banner: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #d97706 100%)",
      accentMark: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      mark: "gear",
      enrolled: 92,
      instructors: [
        { name: "Himani", role: "Instructor", color: "linear-gradient(135deg, #3b82f6, #2563eb)" },
        { name: "Ravinder Saini", role: "Instructor", color: "linear-gradient(135deg, #a16207, #ca8a04)" },
      ],
    },
    {
      title: "Database Management Systems",
      code: "25GPA154",
      badge: "ACP 2025",
      banner: "linear-gradient(135deg, #2563eb 0%, #3b82f6 40%, #1d4ed8 100%)",
      accentMark: "linear-gradient(135deg, #3b82f6, #60a5fa)",
      mark: "db",
      enrolled: 76,
      instructors: [
        { name: "Nitika Kapoor", role: "Instructor", color: "linear-gradient(135deg, #ec4899, #db2777)" },
        { name: "Ravinder Saini", role: "Instructor", color: "linear-gradient(135deg, #a16207, #ca8a04)" },
      ],
    },
    {
      title: "Advanced Excel for Data Analysis",
      code: "25GPA153",
      badge: "ACP 2025",
      banner: "linear-gradient(135deg, #16a34a 0%, #22c55e 40%, #15803d 100%)",
      accentMark: "linear-gradient(135deg, #22c55e, #4ade80)",
      mark: "excel",
      enrolled: 63,
      instructors: [
        { name: "Himani", role: "Instructor", color: "linear-gradient(135deg, #3b82f6, #2563eb)" },
        { name: "Nitika Kapoor", role: "Instructor", color: "linear-gradient(135deg, #ec4899, #db2777)" },
      ],
    },
    {
      title: "Web Development Essentials",
      code: "25GPA152",
      badge: "ACP 2025",
      banner: "linear-gradient(135deg, #0891b2 0%, #06b6d4 40%, #0e7490 100%)",
      accentMark: "linear-gradient(135deg, #06b6d4, #22d3ee)",
      mark: "code",
      enrolled: 87,
      instructors: [
        { name: "Ravinder Saini", role: "Instructor", color: "linear-gradient(135deg, #a16207, #ca8a04)" },
        { name: "Himani", role: "Instructor", color: "linear-gradient(135deg, #3b82f6, #2563eb)" },
      ],
    },
    {
      title: "Data Visualization Using Power BI",
      code: "25GPA151",
      badge: "ACP 2025",
      banner: "linear-gradient(135deg, #9333ea 0%, #a855f7 40%, #7e22ce 100%)",
      accentMark: "linear-gradient(135deg, #a855f7, #c084fc)",
      mark: "chart",
      enrolled: 71,
      instructors: [
        { name: "Nitika Kapoor", role: "Instructor", color: "linear-gradient(135deg, #ec4899, #db2777)" },
        { name: "Ravinder Saini", role: "Instructor", color: "linear-gradient(135deg, #a16207, #ca8a04)" },
      ],
    },
    {
      title: "Soft Skills and Personality Development",
      code: "25GPA150",
      badge: "ACP 2025",
      banner: "linear-gradient(135deg, #ea580c 0%, #f97316 40%, #c2410c 100%)",
      accentMark: "linear-gradient(135deg, #f97316, #fb923c)",
      mark: "idea",
      enrolled: 58,
      instructors: [
        { name: "Himani", role: "Instructor", color: "linear-gradient(135deg, #3b82f6, #2563eb)" },
        { name: "Nitika Kapoor", role: "Instructor", color: "linear-gradient(135deg, #ec4899, #db2777)" },
      ],
    },
  ],
};


/* ═══════════════════════════════════════════
   DOM References
   ═══════════════════════════════════════════ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const categoryList = $("#categoryList");
const breadcrumb = $("#breadcrumb");
const pageTitle = $("#pageTitle");
const pageSubtitle = $("#pageSubtitle");
const statsEl = $("#stats");
const courseGrid = $("#courseGrid");
const totalCategories = $("#totalCategories");
const categoryTemplate = $("#categoryTemplate");
const subCategoryTemplate = $("#subCategoryTemplate");
const statTemplate = $("#statTemplate");
const courseTemplate = $("#courseTemplate");


/* ═══════════════════════════════════════════
   Sidebar Toggle (Mobile)
   ═══════════════════════════════════════════ */

const sidebar = $("#sidebar");
const overlay = $("#sidebarOverlay");
const mobileMenuBtn = $("#mobileMenuBtn");

function openSidebar() {
  sidebar.classList.add("sidebar--open");
  overlay.classList.add("sidebar-overlay--visible");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.remove("sidebar--open");
  overlay.classList.remove("sidebar-overlay--visible");
  document.body.style.overflow = "";
}

mobileMenuBtn?.addEventListener("click", openSidebar);
overlay?.addEventListener("click", closeSidebar);


/* ═══════════════════════════════════════════
   View Toggle
   ═══════════════════════════════════════════ */

$$(".view-switch__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".view-switch__btn").forEach((b) => b.classList.remove("view-switch__btn--active"));
    btn.classList.add("view-switch__btn--active");
    state.viewMode = btn.dataset.view;
    courseGrid.classList.toggle("course-grid--list", state.viewMode === "list");
  });
});


/* ═══════════════════════════════════════════
   Search Bar — Category Dropdown + Course Search
   ═══════════════════════════════════════════ */

const categoryDropdown = $("#categoryDropdown");
const courseSearchBar = $("#courseSearchBar");

// Category dropdown changes active category and re-renders
categoryDropdown?.addEventListener("change", (e) => {
  state.activeCategoryId = e.target.value;
  state.activeSubcategoryId = null;
  renderAll();
});

// Search input filters visible course cards
courseSearchBar?.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  $$(".course-card").forEach((card) => {
    const title = card.querySelector(".course-card__title").textContent.toLowerCase();
    card.style.display = !query || title.includes(query) ? "" : "none";
  });
});

// Sync dropdown when category changes from sidebar
function syncCategoryDropdown() {
  if (categoryDropdown) {
    categoryDropdown.value = state.activeCategoryId;
  }
}


/* ═══════════════════════════════════════════
   Sidebar Search
   ═══════════════════════════════════════════ */

const sidebarSearch = $("#sidebarSearch");
sidebarSearch?.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  $$(".category").forEach((cat) => {
    const label = cat.querySelector(".category__label").textContent.toLowerCase();
    const match = !query || label.includes(query);
    cat.style.display = match ? "" : "none";
    const nextSibling = cat.nextElementSibling;
    if (nextSibling?.classList.contains("subcategory-list")) {
      nextSibling.style.display = match ? "" : "none";
    }
  });
});


/* ═══════════════════════════════════════════
   Render Functions
   ═══════════════════════════════════════════ */

function renderBreadcrumb() {
  const activeCategory = state.categories.find((c) => c.id === state.activeCategoryId);
  const activeSubcategory = state.activeSubcategoryId
    ? activeCategory?.subcategories?.find((s) => s.id === state.activeSubcategoryId)
    : null;

  // Build breadcrumb — only show subcategory crumb when one is selected
  let breadcrumbHTML = `
    <span class="breadcrumb__home">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    </span>
    <span class="breadcrumb__sep">›</span>
  `;

  if (activeSubcategory) {
    breadcrumbHTML += `
      <span>${activeCategory?.label ?? "Course Categories"}</span>
      <span class="breadcrumb__sep">›</span>
      <span class="breadcrumb__current">${activeSubcategory.label}</span>
    `;
  } else {
    breadcrumbHTML += `<span class="breadcrumb__current">${activeCategory?.label ?? "Course Categories"}</span>`;
  }

  breadcrumb.innerHTML = breadcrumbHTML;

  pageTitle.textContent = activeSubcategory?.label ?? activeCategory?.label ?? "Courses";
  pageSubtitle.textContent = activeSubcategory
    ? "Courses under Academic and Capacity Building Program"
    : `All ${activeCategory?.count ?? ""} courses in ${activeCategory?.label ?? "this category"}`;
}


function renderSidebar() {
  categoryList.innerHTML = "";
  const totalCount = state.categories.reduce((sum, c) => sum + c.count, 0);
  totalCategories.textContent = totalCount;

  state.categories.forEach((category) => {
    const node = categoryTemplate.content.firstElementChild.cloneNode(true);
    node.classList.toggle("category--active", category.id === state.activeCategoryId);
    node.classList.toggle("category--expanded", Boolean(category.expanded && category.subcategories?.length));
    node.querySelector(".category__icon").innerHTML = iconMarkup(category.icon);
    node.querySelector(".category__label").textContent = category.label;
    node.querySelector(".category__count").textContent = category.count;

    node.addEventListener("click", () => {
      const target = state.categories.find((c) => c.id === category.id);
      if (target?.subcategories?.length) {
        // Toggle expand/collapse; selecting a NEW category clears any subcategory selection
        if (state.activeCategoryId !== category.id) {
          // Switching to a different category — expand it, clear subcategory
          target.expanded = true;
          state.activeCategoryId = category.id;
          state.activeSubcategoryId = null;
        } else {
          // Same category clicked — just toggle the accordion
          target.expanded = !target.expanded;
          if (!target.expanded) {
            // Collapsed — clear subcategory so all courses show
            state.activeSubcategoryId = null;
          }
        }
      } else {
        state.activeCategoryId = category.id;
        state.activeSubcategoryId = null;
      }
      renderAll();
    });

    categoryList.appendChild(node);

    if (category.subcategories?.length && category.expanded) {
      const subList = document.createElement("div");
      subList.className = "subcategory-list";

      category.subcategories.forEach((sub) => {
        const subNode = subCategoryTemplate.content.firstElementChild.cloneNode(true);
        subNode.classList.toggle("subcategory--active", sub.id === state.activeSubcategoryId);
        subNode.querySelector(".subcategory__label").textContent = sub.label;
        subNode.querySelector(".subcategory__count").textContent = sub.count;
        subNode.addEventListener("click", (e) => {
          e.stopPropagation();
          state.activeCategoryId = category.id;
          // Toggle: clicking the already-active subcategory clears it (goes back to all)
          state.activeSubcategoryId = sub.id === state.activeSubcategoryId ? null : sub.id;
          renderAll();
        });
        subList.appendChild(subNode);
      });

      categoryList.appendChild(subList);
    }
  });
}


function renderStats() {
  statsEl.innerHTML = "";

  state.stats.forEach((item) => {
    const node = statTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".stat__icon").innerHTML = iconMarkup(item.icon);
    node.querySelector(".stat__label").textContent = item.label;
    node.querySelector(".stat__value").textContent = item.value;
    statsEl.appendChild(node);
  });
}


function renderCourses() {
  courseGrid.innerHTML = "";

  // If a subcategory is selected, show only the courses that match its count (first N).
  // In a real app you'd filter by a categoryId field on each course.
  // Here: no subcategory = show all; subcategory selected = show only its count slice.
  const activeCategory = state.categories.find((c) => c.id === state.activeCategoryId);
  const activeSub = state.activeSubcategoryId
    ? activeCategory?.subcategories?.find((s) => s.id === state.activeSubcategoryId)
    : null;

  let visibleCourses = state.courses;
  if (activeSub) {
    // Simulate filtering: show only `activeSub.count` courses
    visibleCourses = state.courses.slice(0, activeSub.count);
  }

  visibleCourses.forEach((course, index) => {
    const card = courseTemplate.content.firstElementChild.cloneNode(true);
    card.style.setProperty("--banner", course.banner);
    card.style.setProperty("--accent-mark", course.accentMark);
    card.style.animationDelay = `${index * 0.06}s`;

    card.querySelector(".course-card__badge").textContent = course.badge;
    card.querySelector(".course-card__mark").innerHTML = iconMarkup(course.mark);
    card.querySelector(".course-card__title").textContent = `${course.code} :: ${course.title}`;

    // Enrolled count
    const enrolledEl = card.querySelector(".course-card__enrolled");
    enrolledEl.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      ${course.enrolled} Enrolled
    `;


    courseGrid.appendChild(card);
  });

  // Maintain view mode
  courseGrid.classList.toggle("course-grid--list", state.viewMode === "list");
}


/* ═══════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════ */

function getInitials(name) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}


function iconMarkup(type) {
  const icons = {
    folder: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H10l2 2h6.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z"/>
      </svg>`,
    stack: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 3 8l9 4 9-4-9-4Zm0 8L3 8v4l9 4 9-4V8l-9 4Zm0 4L3 12v4l9 4 9-4v-4l-9 4Z"/>
      </svg>`,
    archive: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v1A2.5 2.5 0 0 1 17.5 10h-11A2.5 2.5 0 0 1 4 7.5z"/>
        <path d="M5 10h14v8.5A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5z"/>
        <path d="M9 13h6" />
      </svg>`,
    calendar: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3v2M17 3v2M4 7h16" />
        <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v11A2.5 2.5 0 0 1 16.5 20h-9A2.5 2.5 0 0 1 5 17.5z"/>
        <path d="M8 11h3M8 14h3M13 11h3M13 14h3"/>
      </svg>`,
    lab: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 3h4M11 3v6l-5.5 8.5A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.7-3.1L13 9V3"/>
        <path d="M9 14h6"/>
      </svg>`,
    book: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5z"/>
        <path d="M8 8h8M8 11h8M8 14h6"/>
      </svg>`,
    users: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>
        <path d="M4 19a5 5 0 0 1 10 0"/>
        <path d="M14 19a5 5 0 0 1 6-4.9"/>
      </svg>`,
    group: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
        <path d="M15.5 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        <path d="M3 19a6 6 0 0 1 12 0"/>
        <path d="M14 19a5 5 0 0 1 7-4.6"/>
      </svg>`,
    clock: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 6v6l4 2"/>
        <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>
      </svg>`,
    chart: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16"/>
        <path d="M7 16v-5M12 16V8M17 16v-8"/>
      </svg>`,
    gear: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10.5 4.5h3l.6 2.1a6.5 6.5 0 0 1 1.8 1l2.1-.8 1.5 2.6-1.7 1.5c.1.3.1.7.1 1s0 .7-.1 1l1.7 1.5-1.5 2.6-2.1-.8a6.5 6.5 0 0 1-1.8 1l-.6 2.1h-3l-.6-2.1a6.5 6.5 0 0 1-1.8-1l-2.1.8-1.5-2.6 1.7-1.5a6 6 0 0 1 0-2l-1.7-1.5 1.5-2.6 2.1.8a6.5 6.5 0 0 1 1.8-1z"/>
        <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/>
      </svg>`,
    db: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3"/>
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/>
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>
      </svg>`,
    excel: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h9v16H4z"/>
        <path d="M13 6h7v12h-7z"/>
        <path d="M7 8l4 4-4 4M11 8l-4 4 4 4"/>
      </svg>`,
    code: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 7-4 5 4 5"/>
        <path d="m16 7 4 5-4 5"/>
        <path d="m13 6-2 12"/>
      </svg>`,
    idea: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4a6 6 0 0 1 3 11v2H9v-2a6 6 0 0 1 3-11Z"/>
        <path d="M9.5 19h5"/>
      </svg>`,
    R: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <text x="12" y="17" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor" stroke="none">R</text>
      </svg>`,
  };

  return icons[type] ?? icons.book;
}


/* ═══════════════════════════════════════════
   Render All & Initialize
   ═══════════════════════════════════════════ */

function renderAll() {
  renderBreadcrumb();
  renderSidebar();
  renderCourses();
  syncCategoryDropdown();
}

renderAll();
