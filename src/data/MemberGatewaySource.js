import DocsSource from './DocsSource';
import semver from 'semver';

const branchBlacklist = new Set(['gh-pages', 'gh-pages-dev', 'docs', 'webpack', 'indev-old', 'v8']);
export default new DocsSource({
	id: 'klasa-member-gateway',
	name: 'Member Gateway',
	global: 'kmg',
	repo: 'dirigeants/klasa-member-gateway',
	defaultTag: 'master',
	branchFilter: branch => {
		if (/^greenkeeper/g.test(branch)) return false;
		return !branchBlacklist.has(branch);
	},
	tagFilter: tag => semver.gte(tag, '0.0.0')
});
