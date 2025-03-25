import { Injectable } from '@angular/core';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: { [key: string]: BlogPost } = {
    'hrms-workflows': {
      id: 'hrms-workflows',
      title: 'Custom Workflow Implementation in HRMS Systems',
      date: 'March 20, 2024',
      category: 'Enterprise Software',
      image: 'assets/blog/blog1.png',
      content: `
        <h2>Revolutionizing HR Processes with Custom Workflows</h2>
        <p>In modern Human Resource Management Systems (HRMS), flexibility and customization are key to meeting diverse organizational needs. Our implementation of a custom workflow module allows organizations to create, manage, and automate their unique HR processes efficiently.</p>
        
        <h3>Why Custom Workflows Matter</h3>
        <p>Every organization has its own unique processes and approval chains. Some key benefits of implementing custom workflows include:</p>
        <ul>
          <li>Tailored approval processes for different departments</li>
          <li>Flexible routing rules based on organizational hierarchy</li>
          <li>Dynamic form generation for different types of requests</li>
          <li>Automated notifications and reminders</li>
          <li>Real-time tracking of request status</li>
        </ul>

        <h3>Technical Implementation</h3>
        <p>Here's how we implemented the workflow engine using TypeScript and Node.js:</p>
        
        <pre class="code-block">
interface WorkflowStep {
  id: string;
  type: 'approval' | 'notification' | 'action';
  assignee: string[];
  conditions?: {
    field: string;
    operator: 'equals' | 'greater' | 'less';
    value: any;
  }[];
  actions: {
    type: 'update' | 'notify' | 'create';
    params: Record<string, any>;
  }[];
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  trigger: {
    type: 'form' | 'event' | 'schedule';
    config: Record<string, any>;
  };
  steps: WorkflowStep[];
}
        </pre>

        <h3>Creating Custom Workflows</h3>
        <p>The workflow module provides a user-friendly interface for HR administrators to:</p>
        <ul>
          <li>Define workflow triggers (forms, events, or schedules)</li>
          <li>Configure approval hierarchies</li>
          <li>Set up conditional routing</li>
          <li>Design custom forms</li>
          <li>Configure notifications</li>
        </ul>

        <h3>Example: Leave Request Workflow</h3>
        <p>Here's an example of how a leave request workflow is configured:</p>
        
        <pre class="code-block">
const leaveWorkflow: Workflow = {
  id: 'leave-request',
  name: 'Leave Request Approval',
  description: 'Standard leave request approval process',
  trigger: {
    type: 'form',
    config: {
      formId: 'leave-request-form'
    }
  },
  steps: [
    {
      id: 'manager-approval',
      type: 'approval',
      assignee: ['{{employee.manager}}'],
      conditions: [
        {
          field: 'duration',
          operator: 'less',
          value: 5
        }
      ],
      actions: [
        {
          type: 'update',
          params: {
            status: 'approved',
            notifyEmployee: true
          }
        }
      ]
    }
  ]
};
        </pre>

        <h3>Benefits Realized</h3>
        <p>Organizations using our custom workflow module have reported:</p>
        <ul>
          <li>60% reduction in process completion time</li>
          <li>Improved transparency in approval processes</li>
          <li>Reduced manual intervention and human errors</li>
          <li>Better compliance tracking and reporting</li>
          <li>Increased employee satisfaction with HR processes</li>
        </ul>

        <h3>Future Enhancements</h3>
        <p>We're continuously improving the workflow module with planned features including:</p>
        <ul>
          <li>AI-powered workflow suggestions based on historical data</li>
          <li>Advanced analytics and process optimization recommendations</li>
          <li>Integration with external systems and APIs</li>
          <li>Mobile app support for workflow actions</li>
          <li>Enhanced reporting and dashboard capabilities</li>
        </ul>
      `
    },
    'tech-trends': {
      id: 'tech-trends',
      title: 'Understanding SendGrid CC Email Limitations',
      date: 'March 15, 2024',
      category: 'Backend Development',
      image: 'assets/blog/blog2.png',
      content: `
        <p>When working with SendGrid's email service, there's an important limitation that developers need to be aware of: the CC (carbon copy) email address cannot be the same as the sender's email address. This is a common gotcha that can cause issues in email delivery and application functionality.</p>
        
        <h2>Understanding the Limitation</h2>
        <p>SendGrid enforces this restriction to prevent potential email loops and ensure proper email delivery. When you try to CC the sender's email address, SendGrid will reject the request with an error. This is particularly important when building applications that need to send emails to multiple recipients while including the sender in the CC list.</p>
        
        <h2>The Solution</h2>
        <p>To handle this limitation, you need to filter out the sender's email address from the CC list before sending the email. Here's how you can implement this in your code:</p>
        
        <pre class="code-block">
const senderEmail = 'sender@example.com';
const ccList = ['recipient1@example.com', 'recipient2@example.com', 'sender@example.com'];

// Filter out the sender's email from CC list
const filteredCcList = ccList.filter(email => email !== senderEmail);

// Now use filteredCcList in your SendGrid email configuration
const msg = {
  to: recipientEmail,
  from: senderEmail,
  cc: filteredCcList,
  subject: 'Your Subject',
  text: 'Email content'
};
        </pre>
        
        <h2>Best Practices</h2>
        <p>When implementing email functionality with SendGrid:</p>
        <ul>
          <li>Always validate and filter CC recipients before sending</li>
          <li>Consider implementing a notification system for cases where the sender needs to be informed</li>
          <li>Add proper error handling for email sending failures</li>
          <li>Log any filtered CC addresses for debugging purposes</li>
        </ul>
      `
    }
  };

  getBlogPost(id: string): BlogPost | undefined {
    return this.blogPosts[id];
  }
} 