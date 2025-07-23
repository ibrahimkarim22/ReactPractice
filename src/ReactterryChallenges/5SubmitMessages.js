
/**https://www.reacterry.com/portal/challenges/submit-messages */

/*Submit Messages*/

/**You’re presented with a component called MessageFeed. 
 * This component has already been designed. Your task is 
 * to write the necessary logic to make it work as expected.

MessageFeed displays a feed box with past messages. 
Below the feed box, you can find an input element where 
the user can type in their message. Add the necessary 
code to append the user message to the existing message 
feed when the user presses Shift + Enter on their keyboard. 

You don’t need to worry about styling your application as we 
have already done it for you. But if you wish to update the styles, 
you can use styled-components, inline style or tailwindcss.
Do not edit the data-testid attributes.
You only need to add the message submission logic.
Do not let users submit empty messages.
*/

/* my solution */

import styled from 'styled-components';

const MessageFeed = () => {
  const [messages, setMessages] = useState([
    'The minute she landed she understood the reason this was a fly-over state.',
    "She thought there'd be sufficient time if she hid her watch.",
  ]);
  const inputRef = useRef(null);

  const sendMessage = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      const value = inputRef.current.value.trim();
      if (value) {
        setMessages([...messages, value]);
        inputRef.current.value = '';
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', sendMessage);
    return () => {
      document.removeEventListener('keydown', sendMessage);
    };
  }, [messages]);
   return (
    <MessageFeedContainer>
      <MessageContainer data-testid="message-container">
        {messages.map((message, index) => (
          <Message data-testid="message" key={index}>
            {message}
          </Message>
        ))}
      </MessageContainer>
      <MessageInput
        data-testid="message-input"
        type="text"
        ref={inputRef}
        placeholder="Type your message and press Shift + Enter to send"
      />
    </MessageFeedContainer>
  );
};

export default MessageFeed;

/**reacterry official solution */

/**import styled from 'styled-components';

const MessageFeed = () => {
  const [messages, setMessages] = useState(["The minute she landed she understood the reason this was a fly-over state.", "She thought there'd be sufficient time if she hid her watch."]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.length > 0) {
        setMessages([...messages, inputValue]);
        setInputValue('');
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [messages, inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
 */