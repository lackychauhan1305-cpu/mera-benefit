function startSearch() {
    document.body.insertAdjacentHTML("beforeend", `
        <div class="questionnaire-overlay" id="questionnaire">

            <div class="questionnaire-box">

                <button class="close-btn" onclick="closeQuestionnaire()">×</button>

                <div class="form-header">
                    <div class="form-badge">MERA BENEFIT</div>

                    <h2>Find Benefits Made For You</h2>

                    <p>
                        Answer a few simple questions to discover
                        government schemes and scholarships you may be
                        eligible for.
                    </p>
                </div>

                <form onsubmit="submitProfile(event)">

                    <label>1. Your State</label>
                    <select id="state" required>
                        <option value="">Select State</option>
                        <option>Gujarat</option>
                        <option>Maharashtra</option>
                        <option>Rajasthan</option>
                        <option>Delhi</option>
                        <option>Uttar Pradesh</option>
                        <option>Madhya Pradesh</option>
                        <option>Other</option>
                    </select>

                    <label>2. Your Age</label>
                    <input
                        type="number"
                        id="age"
                        min="1"
                        max="120"
                        placeholder="Enter your age"
                        required
                    >

                    <label>3. Gender</label>
                    <select id="gender" required>
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>

                    <label>4. What are you currently doing?</label>
                    <select id="occupation" required>
                        <option value="">Select</option>
                        <option>Student</option>
                        <option>Job</option>
                        <option>Business</option>
                        <option>Farmer</option>
                        <option>Looking for a Job</option>
                        <option>Other</option>
                    </select>

                    <label>5. Education</label>
                    <select id="education" required>
                        <option value="">Select Education</option>
                        <option>Below 10th</option>
                        <option>10th Pass</option>
                        <option>12th Pass</option>
                        <option>ITI / Diploma</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                        <option>Other</option>
                    </select>

                    <label>6. Annual Family Income</label>
                    <select id="income" required>
                        <option value="">Select Income</option>
                        <option>Below ₹1 Lakh</option>
                        <option>₹1–2.5 Lakh</option>
                        <option>₹2.5–5 Lakh</option>
                        <option>₹5–8 Lakh</option>
                        <option>Above ₹8 Lakh</option>
                    </select>

                    <label>7. Category</label>
                    <select id="category" required>
                        <option value="">Select Category</option>
                        <option>General</option>
                        <option>OBC</option>
                        <option>SC</option>
                        <option>ST</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                    </select>

                    <label>8. Area</label>
                    <select id="area" required>
                        <option value="">Select Area</option>
                        <option>Rural</option>
                        <option>Urban</option>
                    </select>

                    <button type="submit" class="find-btn">
                        Find My Benefits →
                    </button>

                </form>

            </div>
        </div>
    `);

    addQuestionnaireStyles();
}


function closeQuestionnaire() {
    const questionnaire = document.getElementById("questionnaire");

    if (questionnaire) {
        questionnaire.remove();
    }
}


function submitProfile(event) {
    event.preventDefault();

    const profile = {
        state: document.getElementById("state").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        occupation: document.getElementById("occupation").value,
        education: document.getElementById("education").value,
        income: document.getElementById("income").value,
        category: document.getElementById("category").value,
        area: document.getElementById("area").value
    };

    console.log("User Profile:", profile);

    alert(
        "Your profile has been saved! ✅\n\n" +
        "Next, Mera Benefit will check which government schemes " +
        "you may be eligible for."
    );
}


function addQuestionnaireStyles() {

    if (document.getElementById("questionnaire-styles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "questionnaire-styles";

    style.innerHTML = `
        .questionnaire-overlay {
            position: fixed;
            inset: 0;
            background: rgba(10, 20, 35, 0.65);
            backdrop-filter: blur(6px);
            z-index: 9999;
            overflow-y: auto;
            padding: 30px 15px;
        }

        .questionnaire-box {
            position: relative;
            max-width: 650px;
            margin: 20px auto;
            background: white;
            border-radius: 20px;
            padding: 35px;
            box-shadow: 0 25px 70px rgba(0,0,0,0.2);
        }

        .close-btn {
            position: absolute;
            right: 18px;
            top: 15px;
            width: 38px;
            height: 38px;
            border: none;
            border-radius: 50%;
            background: #f1f3f7;
            font-size: 25px;
            cursor: pointer;
        }

        .form-header {
            padding-right: 40px;
            margin-bottom: 30px;
        }

        .form-badge {
            display: inline-block;
            color: #1769e0;
            background: #eaf2ff;
            padding: 6px 12px;
            border-radius: 30px;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }

        .form-header h2 {
            font-size: 32px;
            line-height: 1.2;
            margin-bottom: 10px;
            color: #172033;
        }

        .form-header p {
            color: #687386;
            font-size: 15px;
        }

        .questionnaire-box form {
            display: flex;
            flex-direction: column;
        }

        .questionnaire-box label {
            margin-top: 18px;
            margin-bottom: 7px;
            font-weight: 700;
            color: #263044;
            font-size: 14px;
        }

        .questionnaire-box input,
        .questionnaire-box select {
            width: 100%;
            padding: 13px 14px;
            border: 1px solid #dce1e9;
            border-radius: 9px;
            background: white;
            font-size: 15px;
            color: #263044;
            outline: none;
        }

        .questionnaire-box input:focus,
        .questionnaire-box select:focus {
            border-color: #1769e0;
            box-shadow: 0 0 0 3px rgba(23,105,224,0.08);
        }

        .find-btn {
            margin-top: 30px;
            padding: 15px;
            border: none;
            border-radius: 10px;
            background: #1769e0;
            color: white;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
        }

        .find-btn:hover {
            transform: translateY(-1px);
        }

        @media (max-width: 600px) {

            .questionnaire-overlay {
                padding: 10px;
            }

            .questionnaire-box {
                padding: 25px 20px;
                margin: 5px auto;
                border-radius: 16px;
            }

            .form-header h2 {
                font-size: 27px;
            }
        }
    `;

    document.head.appendChild(style);
}
