import styled from "styled-components";

export const CardGridWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const InfoCardWrapper = styled.div<{ backgroundColor: string }>`
  width: 19rem;
  height: 5.5rem;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 0.313rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`;

export const CardNameNumberWrapper = styled.div``;
export const CardName = styled.p`
  font-size: 1rem;
  color: white;
  font-weight: 600;
`;
export const Number = styled.h1`
  color: white;
  font-size: 1.875rem;
`;
export const IconWrapper = styled.div`
  width: 2.625rem;
  height: 2.625rem;
  background: #ffffff33;
  border-radius: 0.313rem;
  display: grid;
  place-content: center;
  color: white;
`;
export const ComponentName = styled.h1`
  color: #24252a;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 1.25rem 0;
`;

export const DashboardWrapper = styled.section`
  padding: 0 1.25rem;
`;
