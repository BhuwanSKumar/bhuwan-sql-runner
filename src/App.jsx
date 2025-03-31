import React, { useState } from "react";
import styled from "styled-components";
import { Select, Table, Input } from "antd";

const { Option } = Select;
const { TextArea } = Input;

// Dummy predefined queries and results
const queries = [
  { id: 1, text: "SELECT * FROM users;", data: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }] },
  { id: 2, text: "SELECT * FROM orders;", data: [{ order_id: 101, amount: 50 }, { order_id: 102, amount: 75 }] },
];

// Styles
const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const QueryBox = styled(TextArea)`
  width: 100%;
  height: 100px;
  margin: 10px 0;
`;

const App = () => {
  const [selectedQuery, setSelectedQuery] = useState(queries[0]);

  return (
    <Container>
      <h2>SQL Query Runner (Dummy App)</h2>
      
      {/* Query Selector */}
      <Select
        style={{ width: "100%", marginBottom: "10px" }}
        value={selectedQuery.text}
        onChange={(value) => setSelectedQuery(queries.find(q => q.text === value))}
      >
        {queries.map(q => <Option key={q.id} value={q.text}>{q.text}</Option>)}
      </Select>

      {/* SQL Input */}
      <QueryBox value={selectedQuery.text} readOnly />
      
      {/* Table Display */}
      <h3>Query Results:</h3>
      <Table
        dataSource={selectedQuery.data}
        columns={selectedQuery.data.length > 0 ? Object.keys(selectedQuery.data[0]).map(key => ({ title: key, dataIndex: key })) : []}
        rowKey={Object.keys(selectedQuery.data[0])[0]}
      />
    </Container>
  );
};

export default App;
