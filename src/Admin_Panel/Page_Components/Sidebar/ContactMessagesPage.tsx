import { Mail, Search, Clock, ChevronDown, ChevronUp, Reply, Trash2 } from 'lucide-react';
import { useState } from 'react';

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
};

const ContactMessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Membership Inquiry',
      message: 'Hello, I would like to inquire about joining the society. What are the requirements?',
      date: '2023-05-15 10:30',
      read: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Event Question',
      message: 'When is the next society event happening? I would like to attend.',
      date: '2023-05-14 14:45',
      read: true,
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert@example.com',
      subject: 'Feedback',
      message: 'The last event was fantastic! Thank you for organizing it.',
      date: '2023-05-12 09:15',
      read: true,
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMessage = (id: number) => {
    setSelectedMessage(selectedMessage === id ? null : id);
    // Mark as read when opened
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter(msg => msg.id !== id));
    if (selectedMessage === id) {
      setSelectedMessage(null);
    }
  };

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar would be included here */}
      <div className="flex-1 p-6 md:p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Contact Messages</h1>
          </div>
          <p className="text-gray-600">View and manage messages from users</p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Search Bar */}
          <div className="p-4 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search messages..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Messages List */}
          <div className="divide-y divide-gray-200">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((message) => (
                <div key={message.id} className={`${message.read ? 'bg-white' : 'bg-blue-50'}`}>
                  <div
                    className="px-4 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                    onClick={() => toggleMessage(message.id)}
                  >
                    <div className="flex items-center min-w-0">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                        message.read ? 'bg-gray-200' : 'bg-blue-100 text-blue-600'
                      }`}>
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="ml-4 min-w-0">
                        <div className="flex items-center">
                          <p className={`text-sm font-medium ${
                            message.read ? 'text-gray-600' : 'text-blue-800'
                          } truncate`}>
                            {message.name}
                          </p>
                          <span className="ml-2 text-xs text-gray-500">{message.email}</span>
                        </div>
                        <p className="text-sm text-gray-900 truncate">{message.subject}</p>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{message.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {selectedMessage === message.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Message Content */}
                  {selectedMessage === message.id && (
                    <div className="px-4 pb-4 pt-2 bg-gray-50">
                      <div className="mt-2 text-sm text-gray-700 whitespace-pre-line">
                        {message.message}
                      </div>
                      <div className="mt-4 flex space-x-3">
                        <button
                          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <Reply className="h-4 w-4 mr-2" />
                          Reply
                        </button>
                        <button
                          onClick={() => deleteMessage(message.id)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="px-4 py-12 text-center">
                <Mail className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No messages</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm ? 'No messages match your search.' : 'All messages have been cleared.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessagesPage;