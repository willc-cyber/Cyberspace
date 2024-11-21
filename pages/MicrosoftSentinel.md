---
layout: default
---

# Microsoft Sentinel Home Lab Setup 
<section class="overview">
            <h2>Overview</h2>
            <p>This project demonstrates the setup of a <b>free SIEM</b> using <b>Microsoft Sentinel</b> on <b>Azure</b>. Below are the steps I have done to set up the SIEM tool.</p>
        </section>
		
<section class="steps">
            <h2>Steps to Set Up</h2>
            
            <div class="step">
                <h3>Step 1: Create an Azure Account</h3>
                <p>
                    Go to <a href="https://azure.microsoft.com/en-us/pricing/details/microsoft-sentinel/" target="_blank">Microsoft Sentinel Pricing Page</a> and click "Try Azure for free". 
                    Follow the steps to complete your account setup.
                </p>
                <img src="/assets/images/MS/step1.png" alt="Azure Sign Up Screenshot">
            </div>
            
            <div class="step">
                <h3>Step 2: Access the Azure Portal</h3>
                <p>Once the account is ready, log in to the <strong>Azure Portal</strong>.</p>
            </div>

            <div class="step">
                <h3>Step 3: Create a Virtual Machine</h3>
                <p>
                    Navigate to <strong>Virtual Machines</strong> and create an "Azure virtual machine with preset configuration."
                </p>
				<img src="/assets/images/MS/step3.1.png" alt="Virtual Machine Setup Screenshot">
				<img src="/assets/images/MS/step3.2.png" alt="Virtual Machine Setup Screenshot">
                <ul>
                    <li>Create a new resource group and name it.</li>
                    <li>Choose a virtual machine name and set the region to match the Sentinel workspace (configured later).</li>
                    <img src="/assets/images/MS/step3.3.png" alt="Virtual Machine Setup Screenshot">
					<li>Enter a username and password for remote login.</li>
                    <li>Choose <strong>Windows 10 Pro</strong> or <strong>Windows 11 Pro</strong>					in the image section.</li>
                    <li>Leave other settings as default and click "Review + Create."</li>
					<img src="/assets/images/MS/step3.4.png" alt="Virtual Machine Setup Screenshot">
                </ul>
            </div>
            
            <div class="step">
                <h3>Step 4: Deploy the Virtual Machine</h3>
                <p>Wait for the virtual machine to deploy. In the meantime, search for <strong>Sentinel</strong> in the Azure search bar.</p>
				<img src="/assets/images/MS/step4.png" alt="Search for Microsoft Sentinel">
			</div>
            
            <div class="step">
                <h3>Step 5: Create a Sentinel Workspace</h3>
                <p>
                    Set up a Sentinel workspace in the same resource group and region as the virtual machine.
                    After reviewing, click "Create."
                </p>
                <img src="/assets/images/MS/step5.1.png" alt="Sentinel Workspace Setup Screenshot">
				<img src="/assets/images/MS/step5.2.png" alt="Sentinel Workspace Setup Screenshot">
				<img src="/assets/images/MS/step5.3.png" alt="Sentinel Workspace Setup Screenshot">
				
            </div>
            
            <div class="step">
                <h3>Step 6: Configure Microsoft Sentinel</h3>
                <p>Add Microsoft Sentinel to the newly created workspace.</p>
				<img src="/assets/images/MS/step6.png" alt="Configure Microsoft Sentinel">
            </div>
            
            <div class="step">
                <h3>Step 7: Checking Workspace Settings</h3>
                <p>In the <strong>Configuration</strong> section, go to <strong>Workspace Settings</strong> and click <strong>Agents</strong>.</p>
				<img src="/assets/images/MS/step7.1.png" alt="Checking Workspace Settings">
				<img src="/assets/images/MS/step7.2.png" alt="Checking Workspace Settings">
			</div>
            
            <div class="step">
                <h3>Step 8: Add a Data Connector</h3>
                <p>
                    In Sentinel, navigate to <strong>Data Connectors</strong> under <strong>Configuration</strong>. 
                    Click "More content at Content Hub," find <strong>Windows Security Events</strong>, and install it.
					<img src="/assets/images/MS/step8.png" alt="Add a Data Connector">
                </p>
            </div>
            
            <div class="step">
                <h3>Step 9: Create a Data Collection Rule</h3>
                <p>
                    Open <strong>Windows Security Events via AMA</strong>, then create a data collection rule with the following:
                </p>
				
                <ul>
                    <li>Name the rule.</li>
                    <li>Use the same resource group.</li>
                    <li>Select <strong>All Security Events</strong> in the Collect tab.</li>
					<img src="/assets/images/MS/step9.png" alt="Create a Data Collection Rule">
                </ul>
            </div>
            
            <div class="step">
                <h3>Step 10: Set Up Alert Policies</h3>
                <p>
                    Go to <strong>Configuration &rarr; Analytics</strong> and create a scheduled query rule to detect login attempts:
                </p>
				<img src="/assets/images/MS/step10.1.png" alt="Set Up Alert Policies">
                <ul>
                    <li>Rule Name: Any descriptive name.</li>
                    <li>MITRE ATT&CK: Initial Access.</li>
                    <li>Query: <code>SecurityEvent | where Activity contains "success" and Account !contains "system"</code></li>
                    <li>Run Query Every: 5 minutes.</li>
					<img src="/assets/images/MS/step10.2.png" alt="Set Up Alert Policies">
					<img src="/assets/images/MS/step10.3.png" alt="Set Up Alert Policies">
                </ul>
            </div>
            
            <div class="step">
                <h3>Step 11: Test the Setup</h3>
                <p>
                    Use RDP to connect to the virtual machine. Download the RDP file and use the credentials set during setup.
                    Once logged in, the Sentinel alert policy will trigger an incident.
                </p>
                <img src="/assets/images/MS/step11.png" alt="Test the Setup">
            </div>
			
			<div class="step">
                <h3>Step 12: Verify the SIEM</h3>
                <p>
                    Check on the incident tab in Microsoft Sentinel and the workspace settings (Agent).
                </p>
                <img src="/assets/images/MS/step12.1.png" alt="Verify the SIEM">
				<img src="/assets/images/MS/step12.2.png" alt="Verify the SIEM">
				<img src="/assets/images/MS/step12.3.png" alt="Verify the SIEM">
            </div>
        </section>

