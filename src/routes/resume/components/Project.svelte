<script lang="ts">
	import type { Project } from '../../../lib/resumes/v1';

	export let project: Project;
</script>

<div>{project.title}</div>
<div>{project.summary}</div>
<div>{project.link}</div>
<div>{project.tech}</div>
