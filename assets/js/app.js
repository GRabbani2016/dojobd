// dojo.bd Interactive Prototype Scripts

document.addEventListener('DOMContentLoaded', function () {
  // 1. Live AI Website Builder Simulator
  const buildBtn = document.getElementById('aiBuildBtn');
  if (buildBtn) {
    buildBtn.addEventListener('click', function () {
      const dojoName = document.getElementById('simDojoName').value.trim() || 'Dragon Shotokan Karate Academy';
      const styleName = document.getElementById('simStyle').value;
      const locationName = document.getElementById('simLocation').value.trim() || 'Dhaka, Bangladesh';
      const subDomain = document.getElementById('simSubdomain').value.trim().toLowerCase().replace(/[^a-z0-9-]/g, '') || 'dragonkarate';
      const themeColor = document.getElementById('simThemeColor').value;

      const btnOriginal = buildBtn.innerHTML;
      buildBtn.disabled = true;
      buildBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>AI Building Dojo Site...';

      setTimeout(function () {
        document.getElementById('prevUrl').textContent = `https://${subDomain}.dojo.bd`;
        document.getElementById('prevTitle').textContent = dojoName;
        document.getElementById('prevSubtitle').textContent = `${styleName} • ${locationName}`;
        document.getElementById('prevHeroBanner').style.background = `linear-gradient(135deg, ${themeColor} 0%, #0f172a 100%)`;
        document.getElementById('prevCtaBtn').style.color = themeColor;

        buildBtn.disabled = false;
        buildBtn.innerHTML = btnOriginal;

        const toastAlert = document.getElementById('builderSuccessAlert');
        if (toastAlert) {
          toastAlert.classList.remove('d-none');
        }
      }, 650);
    });
  }

  // 2. Domain & Sub-domain Availability Checker (host.bd integration)
  const domainCheckBtn = document.getElementById('domainCheckBtn');
  if (domainCheckBtn) {
    domainCheckBtn.addEventListener('click', function () {
      const rawInput = document.getElementById('domainSearchInput').value.trim().toLowerCase();
      const resultBox = document.getElementById('domainResultBox');
      if (!rawInput) {
        resultBox.innerHTML = '<div class="alert alert-warning mt-3 mb-0">Please enter a dojo or organization name (e.g., dragonkarate).</div>';
        return;
      }

      const cleanSlug = rawInput.replace(/\.(com|bd|org|net|dojo\.bd)$/g, '').replace(/[^a-z0-9-]/g, '') || 'mydojo';
      const customDomain = rawInput.includes('.') ? rawInput : `${cleanSlug}.com`;

      resultBox.innerHTML = `
        <div class="row g-3 mt-3">
          <div class="col-md-6">
            <div class="p-3 rounded-3 bg-white text-dark d-flex justify-content-between align-items-center shadow-sm">
              <div>
                <span class="badge bg-success mb-1">FREE SUB-DOMAIN AVAILABLE</span>
                <h6 class="fw-bold mb-0">${cleanSlug}.dojo.bd</h6>
                <small class="text-muted">Includes free hosting &amp; SSL</small>
              </div>
              <button class="btn btn-sm btn-dojo" data-bs-toggle="modal" data-bs-target="#signupModal">Claim Free</button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3 rounded-3 bg-white text-dark d-flex justify-content-between align-items-center shadow-sm">
              <div>
                <span class="badge bg-primary mb-1">CUSTOM DOMAIN (host.bd)</span>
                <h6 class="fw-bold mb-0">${customDomain}</h6>
                <small class="text-muted">Registrar &amp; DNS via <strong>host.bd</strong></small>
              </div>
              <a href="https://host.bd" target="_blank" rel="noopener" class="btn btn-sm btn-outline-dark fw-semibold">Register <i class="bi bi-box-arrow-up-right ms-1"></i></a>
            </div>
          </div>
        </div>
      `;
    });
  }

  // 3. Certificate Verification Demo (on feature-certificate-verification.html)
  const certVerifyBtn = document.getElementById('certVerifyBtn');
  if (certVerifyBtn) {
    certVerifyBtn.addEventListener('click', function () {
      const code = document.getElementById('certCodeInput').value.trim().toUpperCase() || 'DOJO-2026-8841';
      const out = document.getElementById('certVerifyResult');
      out.innerHTML = `
        <div class="alert alert-success border-0 rounded-3 mt-3 mb-0">
          <div class="d-flex align-items-center gap-2 mb-1">
            <i class="bi bi-patch-check-fill fs-5 text-success"></i>
            <strong>Verified Authentic Credential (${code})</strong>
          </div>
          <div class="small">Student: <strong>Tanvir Ahmed</strong> • Rank: <strong>1st Dan Black Belt (Shotokan)</strong> • Issued by: <strong>Dragon Karate Federation</strong></div>
        </div>
      `;
    });
  }

  // 4. Free Launch Sign Up Form Handler (Early Access & Priority Onboarding)
  const signupForm = document.getElementById('dojoSignupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const orgName = document.getElementById('signupOrgName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const phone = document.getElementById('signupPhone').value.trim();
      const msgBox = document.getElementById('signupFormResponse');

      msgBox.innerHTML = `
        <div class="alert alert-success border-0 rounded-3 mt-3 mb-0">
          <h6 class="fw-bold mb-1"><i class="bi bi-check-circle-fill me-1"></i> Priority Launch Registration Confirmed for ${orgName}!</h6>
          <p class="small mb-0">Your early-access details (<strong>${email}</strong> | ${phone}) have been recorded in our onboarding queue. You will receive your sub-domain reservation and dashboard activation link via email shortly.</p>
        </div>
      `;
      signupForm.reset();
    });
  }

  // 5. Direct Support Inquiry Form Handler (on about.html)
  const supportForm = document.getElementById('dojoSupportForm');
  if (supportForm) {
    supportForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const clubName = document.getElementById('supportClubName').value.trim();
      const supportOut = document.getElementById('supportFormResponse');
      supportOut.innerHTML = `
        <div class="alert alert-success border-0 rounded-3 mt-3 mb-0">
          <i class="bi bi-check-circle-fill me-1"></i> Thank you, <strong>${clubName}</strong>! Our onboarding specialists will reply to your inquiry within 24 hours.
        </div>
      `;
      supportForm.reset();
    });
  }
});
