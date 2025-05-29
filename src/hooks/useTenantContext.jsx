import {useContext} from 'react';
import { TenantContext } from '../context/Tenant';

export const useTenantContext = () => useContext(TenantContext);