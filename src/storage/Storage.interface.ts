import { SourcesConfig } from '../common/types/SourcesConfig';

export interface StorageService {
    saveSourcesConfig(data: SourcesConfig): Promise<void>;
}
